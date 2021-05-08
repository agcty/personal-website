import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    scrollY: 0,
    scrollX: 0,
  });

  const handleScrollEvent = useCallback((e: any) => {
    setState({
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });
  }, []);

  useEffect(() => {
    setState({ scrollX: window.scrollX, scrollY: window.scrollY });

    const scrollListener = (e) => {
      handleScrollEvent(e);
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScrollEvent]);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
  };
};

export default useScroll;
