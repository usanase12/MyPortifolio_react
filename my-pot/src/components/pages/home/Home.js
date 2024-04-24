import React from "react";
import "./Home.css";
import backgroundImage from "../../../images/sando.jpeg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
        <div class="container mx-auto px-4 py-8 text-center">
    <h1 class="text-4xl font-bold mb-6">Hello, I'm Sandrine Usanase</h1>
    <div class="leading-relaxed">
      <p class="text-center">
        I'm soon to graduate from university, majoring in Information Technology with a focus on Information Management.
      </p>
      <p class="text-center">
        My studies have equipped me with skills in data analytics, and I also specialize as a frontend developer.
      </p>
      <p class="text-center">
        I enjoy working on the visual aspects of websites and applications, 
      </p>
      <p class="text-center">
        and I enjoy learning new technologies.
      </p>
    </div>
    <button class="bg-green-500 text-white py-2 px-6 rounded-lg mt-4">More On Me</button>
  </div>
  <div>
  
  </div>
    </div>
  );
}

export default Home;
