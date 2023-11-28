import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const MapTag = ({ name, color }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // detect the position of the cursor
  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.pageX, y: e.pageY });
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // need inline style to render a real time state of the tag
  const styles = {
    left: position.x - 75,
    top: position.y - 235,
    background: color,
  };

  return (
    <div
      style={styles}
      className="absolute px-2 py-1 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] shadow-md border border-white"
    >
      {name}
    </div>
  );
};

MapTag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default MapTag;
