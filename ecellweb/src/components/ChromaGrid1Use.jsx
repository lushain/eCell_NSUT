import ChromaGrid1 from './ChromaGrid1'
import React from 'react';



import st11 from "../assets/st11.png" // Ensure this path is correct
import st22 from "../assets/st22.png" // Ensure this path is correct
import tech1 from "../assets/tech1.png" // Ensure this path is correct
import tech2 from "../assets/tech2.png" // Ensure this path is correct
import ops1 from "../assets/ops1.png" // Ensure this path is correct
import ops2 from "../assets/ops2.png" // Ensure this path is correct
import ide1 from "../assets/ide1.png" // Ensure this path is correct
import ide2 from "../assets/ide2.png" // Ensure this path is correct
import des1 from "../assets/des1.png" // Ensure this path is correct
import des2 from "../assets/des2.png" // Ensure this path is correct
const items = [
  {
    image: ops1,
    title: 'Balvinder ',
    subtitle: "Head, Operations",
    
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/balvind3rsingh/"
  },
  {
    image: ops2,
    title: "Gitesh ",
    subtitle: "Head, Operations",
        borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/gitesh-batra/"
  },
  {
    image: st11,
    title: "Aditya ",
    subtitle: "Head, Strategy",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/aditya0giri/"
  },
  {
    image: st22,
    title: "Rohan ",
    subtitle: "Head, Strategy",
     borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/rohan-mittal-394329224/"
  },
  {
    image: ide1,
    title: "Riya",
    subtitle: "Head, Ideation",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/riya-munjal-06650922a/"
    
  },
  {
    image: ide2,
    title: "Shrujai ",
    subtitle: "Head, Ideation",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/shrujaigupta/"
  },
  {
    image: tech1,
    title: "Harsh",
    subtitle: "Head, technology",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
  },
  {
    image: tech2,
    title: "Vishu ",
    subtitle: "Head, Technology",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/vishu-aasliya-3b302b22b/"
  },
  {
    image: des1,
    title: "Ojas ",
    subtitle: "Head, Design",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.instagram.com/_ojas_07/?hl=en"
  },
  {
    image: des2,
    title: "Shruti ",
    subtitle: "Head, Design",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/shruti6143/"
  },
];

const ChromaGrid1Use = () => {
  return (
    
      <div style={{ height: '500px', position: 'relative' }}>
  <ChromaGrid1 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
    
  )
}

export default ChromaGrid1Use

