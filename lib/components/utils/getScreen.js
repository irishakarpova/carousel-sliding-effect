import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const {
    innerWidth: width
  } = window;
  return width;
}

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}