import "./GoToTop.css";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [toTop, setToTop] = useState(false);
  
  const handleButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 160 ? setToTop(true) : setToTop(false);
    });
  }, []);

  return (
    <>
      {toTop ? (
        <button onClick={handleButton} className="goTopButton">
          <i className="fa-solid fa-angle-up"></i>
        </button>
      ) : (
        <button className="goTopButton notActive"></button>
      )}
    </>
  );
};

export default GoToTop;
