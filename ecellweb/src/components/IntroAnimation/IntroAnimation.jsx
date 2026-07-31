import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./IntroAnimation.css";

export default function IntroAnimation({ onComplete }) {
  const svgRef = useRef(null);
  const strokeRef = useRef(null);
  const maskTextRef = useRef(null);
  const maskGroupRef = useRef(null);
  const introWrapRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const strokeText = strokeRef.current;
    const maskText = maskTextRef.current;
    const maskGroup = maskGroupRef.current;
    const introWrap = introWrapRef.current;

    // ----- CONFIG -----
    const strokeDuration = 2.0;   // Slightly increased drawing time (was 1.5)
    const zoomDuration = 1.5;     // Slightly increased zoom time (was 1.0)
    const bruteScale = 150;       // huge zoom
    const holeOffsetX = 0.12;     // nudge X (fraction of char width)
    const holeOffsetY = -0.04;    // nudge Y (fraction of char height)

    const label = "eCell NSUT";
    const targetChar = "e";
    function findOccurrence(str, char, occurrence = 2) {
      let idx = -1, count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
          count++;
          if (count === occurrence) { idx = i; break; }
        }
      }
      if (idx === -1) idx = str.indexOf(char);
      return idx === -1 ? 0 : idx;
    }
    const targetIndex = findOccurrence(label, targetChar, 2);

    // sync DOM text nodes
    strokeText.textContent = label;
    maskText.textContent = label;

    // set viewBox to window pixels so getExtentOfChar / getComputedTextLength give pixel values
    function setSVGViewBoxToWindow(){
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (svg) svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    }
    setSVGViewBoxToWindow();
    window.addEventListener("resize", setSVGViewBoxToWindow);

    // Wrap GSAP in context for clean React 18 strict mode cleanup
    let ctx = gsap.context(() => {
      // stroke-draw setup
      const len = (strokeText && strokeText.getComputedTextLength) ? strokeText.getComputedTextLength() : 1200;
      
      // apply initial stroke-dash styles
      gsap.set(strokeText, {
        strokeDasharray: len,
        strokeDashoffset: len,
        opacity: 1
      });

      // compute character bbox with fallback
      function computeCharBBox(index){
        try {
          const ext = maskText.getExtentOfChar(index);
          return { x: ext.x, y: ext.y, width: ext.width, height: ext.height };
        } catch (e) {
          const b = maskText.getBBox();
          return {
            x: b.x + b.width * 0.08,
            y: b.y + b.height * 0.15,
            width: b.width * 0.18,
            height: b.height * 0.7
          };
        }
      }

      // Get bbox and nudged center
      const viewport = { w: window.innerWidth, h: window.innerHeight };
      const charBBox = computeCharBBox(targetIndex);
      let charCenterX = charBBox.x + charBBox.width / 2;
      let charCenterY = charBBox.y + charBBox.height / 2;
      // nudge toward the glyph's hole
      charCenterX += holeOffsetX * charBBox.width;
      charCenterY += holeOffsetY * charBBox.height;

      const viewportCenter = { x: viewport.w / 2, y: viewport.h / 2 };

      // compute translate for brute-scale
      const tx = viewportCenter.x - bruteScale * charCenterX;
      const ty = viewportCenter.y - bruteScale * charCenterY;

      // ensure deterministic start transform
      gsap.set(maskGroup, { attr: { transform: `translate(0 0) scale(1)` } });

      // Build timeline with onComplete callback to notify parent App.jsx
      const tl = gsap.timeline({ 
        defaults: { ease: "power2.out" },
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1) DRAW stroke
      tl.to(strokeText, { strokeDashoffset: 0, duration: strokeDuration, ease: "power1.inOut" });

      // small pause
      tl.to({}, { duration: 0.15 });

      // 2) fade stroke out
      tl.to(strokeText, { opacity: 0, duration: 0.4 }, "<");

      // 3) mask text => knockout
      tl.to(maskText, { attr: { "fill-opacity": 1 }, duration: 0.45 }, "<+=0.04");

      const finalTransform = `translate(${tx} ${ty}) scale(${bruteScale})`;

      // 4) zoom
      tl.to(maskGroup, { attr: { transform: finalTransform }, duration: zoomDuration, ease: "power4.inOut" }, ">");

      // Fade overlay
      const fadeStartOffset = zoomDuration * 0.4;
      const fadeDuration = zoomDuration * 0.2;
      tl.to(introWrap, {
        opacity: 0,
        duration: fadeDuration,
        ease: "power2.out",
        onComplete: () => {
          introWrap.style.display = "none";
          introWrap.style.pointerEvents = "none";
        }
      }, `<+=${fadeStartOffset}`);

    }, introWrapRef); // Scope GSAP to this component

    // cleanup on unmount
    return () => {
      ctx.revert(); // Reverts all GSAP animations and kills timelines safely
      window.removeEventListener("resize", setSVGViewBoxToWindow);
    };
  }, [onComplete]); 

  return (
    <div id="intro-wrap" ref={introWrapRef} className="fixed inset-0 z-[9999] bg-black">
      <svg id="intro-svg" ref={svgRef} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <mask id="text-mask" maskUnits="userSpaceOnUse">
            <rect id="mask-bg" x="0" y="0" width="100%" height="100%" fill="white" />
            <g id="maskGroup" ref={maskGroupRef}>
              <text id="maskText"
                ref={maskTextRef}
                x="50%" y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Poppins, Roboto, Arial, sans-serif"
                fontWeight="900"
                fontSize="100"
                fill="black"
                letterSpacing="3"
                fillOpacity="0"
              >
                eCell NSUT
              </text>
            </g>
          </mask>
        </defs>

        <g id="overlayWrapper">
          <rect id="overlayRect" x="0" y="0" width="100%" height="100%" fill="#000000" mask="url(#text-mask)"></rect>
        </g>

        <text id="strokeText"
          ref={strokeRef}
          x="50%" y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Poppins, Roboto, Arial, sans-serif"
          fontWeight="900"
          fontSize="100"
          fill="none"
          stroke="#Fc9834"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          letterSpacing="3"
          // Set initial styles here to prevent flash before JS runs
          style={{ paintOrder: "stroke", strokeDasharray: "2000", strokeDashoffset: "2000" }}
        >
          eCell NSUT
        </text>
      </svg>
    </div>
  );
}
