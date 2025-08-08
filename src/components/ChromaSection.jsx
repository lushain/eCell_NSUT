import React from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
    {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Alice Green",
    subtitle: "Designer",
    handle: "@alicegreen",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(180deg, #F59E0B, #000)",
    url: "#"
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Tom Wilson",
    subtitle: "DevOps Engineer",
    handle: "@tomwilson",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "#"
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Linda Ray",
    subtitle: "QA Tester",
    handle: "@lindaray",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "#"
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "Nathan Paul",
    subtitle: "AI Engineer",
    handle: "@nathanpaul",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(180deg, #14B8A6, #000)",
    url: "#"
  },
  {
    image: "https://i.pravatar.cc/300?img=7",
    title: "Emily King",
    subtitle: "UX Researcher",
    handle: "@emilyking",
    borderColor: "#EC4899",
    gradient: "linear-gradient(180deg, #EC4899, #000)",
    url: "#"
  },
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Oscar Bright",
    subtitle: "Product Owner",
    handle: "@oscarbright",
    borderColor: "#6366F1",
    gradient: "linear-gradient(180deg, #6366F1, #000)",
    url: "#"
  },

];

const ChromaSection = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default ChromaSection;
