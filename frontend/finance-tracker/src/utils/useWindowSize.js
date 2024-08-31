import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  // by defulat the width and the height will be 0
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    //to trigger updateSize whenever the size of the window changes

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  //useEffect to update whenever the screen size changes

  return {
    width: size[0],
    height: size[1],
  };
};
