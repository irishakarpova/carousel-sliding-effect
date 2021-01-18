export const getShadowContainer = containerShadow => {
  let cShadow = containerShadow === true ? "0 10px 25px -20px rgba(0, 0, 0, 0.6)" : 'none';
  return cShadow;
};
export const getShadowImage = imageShadow => {
  let imgShadow = imageShadow === true ? "0 0 15px rgba(50, 50, 73, 0.4)" : 'none';
  return imgShadow;
};