import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Html...",
        "Css...",
        "JavaScript...",
        "React JS...",
        "Express JS...",
        "Next js...",
        "MERN Stack...",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true, // Optional: Makes it loop infinitely
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="part-1">
        <div className="part-1-items">
          <div className="circle"></div>
          <h1 style={{ marginBottom: "2rem" }} className="joint-font">
            Hello iam <b>Swasthik</b> <br /> a passionate website developer
          </h1>
          <span
            className="joint-font"
            style={{
              color: " rgb(91, 0, 176)",
              fontSize: "xx-large",
              fontWeight: "bold",
            }}
            ref={el}
          />
        </div>
        <p className="joint-font" id="size" style={{ fontSize: "11px" }}>
          Before you start any work. always ask yourself: Why am i doing this?{" "}
          <br />
          The perpose and the goal should be clear: only then will you succeed
        </p>
        <div
          className="flex space-x-1"
          id="icon"
          style={{ marginRight: "5rem", marginTop: "15px" }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={32} className="text-blue-600 hover:text-blue-800" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} className="text-blue-700 hover:text-blue-900" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={32} className="text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle
              size={32}
              className="text-green-500 hover:text-green-700"
            />
          </a>
        </div>
      </div>
      <div className="part-2">
        <br />
        <br />
        <br />
        <img id="img1" src="hacker2.png" alt="" />
        <br />
      </div>
    </div>
  );
};

export default Hero;
