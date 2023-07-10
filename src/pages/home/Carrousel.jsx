import React, { useRef, useState, useEffect } from "react";

export default function Carrousel() {
  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const time = 3500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesRef.current.length);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="carrousel">
      <span className="logo">lenses</span>
      <div className="images">
        <img
          src="/images/banner-img-1.jpg"
          alt=""
          className={`carrousel-img ${currentIndex === 0 ? "selected" : ""}`}
          ref={(element) => (imagesRef.current[0] = element)}
        />
        <img
          src="/images/banner-img-2.jpg"
          alt=""
          className={`carrousel-img ${currentIndex === 1 ? "selected" : ""}`}
          ref={(element) => (imagesRef.current[1] = element)}
        />
        <img
          src="/images/banner-img-3.jpg"
          alt=""
          className={`carrousel-img ${currentIndex === 2 ? "selected" : ""}`}
          ref={(element) => (imagesRef.current[2] = element)}
        />
      </div>
      <div className="infos">
        <h1>Lenses</h1>
        <span>Building Future</span>
        <div className="line"></div>
        <p>
          Experience optical excellence, embrace style, unlock potential. See the difference with Lenses, let your eyes shine.
        </p>
        <button className="explore-button">explore</button>
      </div>
      <div className="fade">
        <ul>
          <li className={`carrousel-img ${currentIndex === 0 ? "selected" : ""}`}></li>
          <li className={`carrousel-img ${currentIndex === 1 ? "selected" : ""}`}></li>
          <li className={`carrousel-img ${currentIndex === 2 ? "selected" : ""}`}></li>
        </ul>
      </div>
    </section>
  );
}