import React from "react";

const containerStyles = {
  width: "100%",
  height: "90vh",
  overflow: "hidden",
  border: "3px solid black"
};

export const Scroller = ({ children }: { children: React.ReactNode }) => {
  const [offset, setOffset] = React.useState({ left: 0, top: 0 });
  const [lastMousePosition, setLastMousePosition] = React.useState({ clientX: 0, clientY: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState(0);

  const onMouseDown = (e: any) => {
    setIsDragging(true);

    setLastMousePosition({
      clientX: e.clientX,
      clientY: e.clientY
    });
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setLastMousePosition({ clientX: 0, clientY: 0 });
  };

  const onMouseMove = (e: any) => {
    if (!isDragging) return;

    const newOffset = {
      left: offset.left + (e.clientX - lastMousePosition.clientX),
      top: offset.top + (e.clientY - lastMousePosition.clientY)
    };

    setOffset(newOffset);

    setLastMousePosition({
      clientX: e.clientX,
      clientY: e.clientY
    });
  };

  const onWheel = (e: any) => {
    if (e.deltaY < 0) {
      setZoomLevel(zoomLevel + 0.2);
    } else {
      setZoomLevel(zoomLevel - 0.2);
    }
  };

  const innerStyle = React.useMemo(() => {
    const { left, top } = offset;
    const scale = Math.pow(1.2, zoomLevel);

    return {
      transform: `translate(${left}px, ${top}px) scale(${scale})`
    };
  }, [offset, zoomLevel]);

  return (
    <div
      style={containerStyles}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onWheel}
    >
      <div style={innerStyle}>{children}</div>
    </div>
  );
};
