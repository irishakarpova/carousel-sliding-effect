export const getShadowContainer = (containerShadow: boolean): string => {
    let cShadow = containerShadow ? "0 0 32px rgba(0, 0, 0, 0.2)" : "none";
    return cShadow;
};

export const getShadowImage = (imageShadow: boolean): string => {
    let iShadow = imageShadow ? "0 0 15px rgba(50, 50, 73, 0.4)" : "none";
    return iShadow;
};
