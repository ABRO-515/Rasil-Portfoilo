import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const useHoverImage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const imageRef = useRef(null);

  const handleMouseEnter = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const moveImage = (e) => {
    if (!imageRef.current) return;

    // Adjust x and y with small offsets so the image stays near the cursor
    gsap.to(imageRef.current, {
      x: e.clientX + "px", // Small offset to the right
      y: e.clientY + 10 + "px", // Small offset downward
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveImage);
    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);

  return { hoveredImage, handleMouseEnter, handleMouseLeave, imageRef };
};

export default useHoverImage;