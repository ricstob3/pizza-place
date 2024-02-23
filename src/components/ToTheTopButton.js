import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback } from "react";

export default function ToTheTopButton() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FontAwesomeIcon
      icon={faCircleChevronUp}
      size="4x"
      className={`${showScroll ? "block" : "hidden"} fixed right-5 bottom-5 opacity-65 hover:opacity-100 transition-opacity cursor-pointer`}
      onClick={scrollToTop}
    />
  );
}
