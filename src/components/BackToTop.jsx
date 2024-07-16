import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 20px from the top of the document
  const scrollFunction = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the document when the button is clicked
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", scrollFunction);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button
      onClick={topFunction}
      style={{ display: isVisible ? "block" : "none" }}
      id="myBtn"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 17.5901L7.41 19.0001L12 14.4201L16.59 19.0001L18 17.5901L12 11.5901L6 17.5901Z"
          fill="white"
        />
        <path
          d="M6 11L7.41 12.41L12 7.83L16.59 12.41L18 11L12 5L6 11Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
