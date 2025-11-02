// Type declaration for Webpack's require.context
declare const require: NodeRequire & {
  context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): {
    keys(): string[];
    (key: string): { default: string };
  };
};

const imagesContext = require.context('../resources/images', false, /\.(png|jpe?g)$/);

// Dynamically generate image imports map
const imageImports: Record<string, string> = {};
imagesContext.keys().forEach((key: string) => {
  const fileName = key.replace('./', '');
  imageImports[fileName] = imagesContext(key).default;
});

export const getImageSrc = (fileName: string) => {
  // Check if it's a URL (external image)
  if (fileName.startsWith('http://') || fileName.startsWith('https://') || fileName.startsWith('//')) {
    return fileName;
  }
  // For local images, use the dynamically generated imported object
  return imageImports[fileName] || imageImports['sample-research-photo-3.jpg'];
};
