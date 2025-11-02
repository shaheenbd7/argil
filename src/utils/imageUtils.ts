const imageImports: Record<string, string> = {
  'profile_pic_ashiqul.png': require('../resources/images/profile_pic_ashiqul.png').default,
  'sample-research-photo-1.jpg': require('../resources/images/sample-research-photo-1.jpg').default,
  'sample-research-photo-2.jpg': require('../resources/images/sample-research-photo-2.jpg').default,
  'sample-research-photo-3.jpg': require('../resources/images/sample-research-photo-3.jpg').default,
};

export const getImageSrc = (fileName: string) => {
  // Check if it's a URL (external image)
  if (fileName.startsWith('http://') || fileName.startsWith('https://') || fileName.startsWith('//')) {
    return fileName;
  }
  // For local images, use the imported object
  return imageImports[fileName] || imageImports['sample-research-photo-3.jpg'];
};
