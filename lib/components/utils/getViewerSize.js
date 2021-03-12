export const getViewerSize = (showNextPrev, width, containerMaxWidth) => {
  let widthNum;
  let showEdges = showNextPrev ? width > 600 ? 50 : 20 : 0;

  if (typeof containerMaxWidth === "string") {
    widthNum = width * parseInt(containerMaxWidth) / 100;
  } else widthNum = containerMaxWidth;

  let viewerSize = width > 600 ? widthNum - showEdges : width - showEdges;
  return viewerSize;
};