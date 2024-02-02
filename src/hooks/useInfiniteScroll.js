import { useEffect } from "react";

function useInfiniteScroll(onScrollEnd) {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop === documentHeight) {
        onScrollEnd();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollEnd]);
}

export default useInfiniteScroll;
