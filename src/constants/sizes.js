export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 2.5 : isMobile ? 3 : isTablet?3.5:4,
      deskPosition: isMobile ? [-1, -3, 6.5] : [-1.9, -3.4, 7.7],
      reactLogoPosition: isSmall ? [3, 5, 0] : isMobile ? [4.5, 5, 0] : isTablet ? [4.5, 6, 0] : [20, 8, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-5, 7, 0] : isTablet ? [-4.5, 7, 0] : [-20, 8, 0],
    };
  };