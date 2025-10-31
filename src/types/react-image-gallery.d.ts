declare module 'react-image-gallery' {
  export interface ReactImageGalleryItem {
    original: string;
    thumbnail?: string;
    originalAlt?: string;
    thumbnailAlt?: string;
    originalTitle?: string;
    thumbnailTitle?: string;
    description?: string;
    srcSet?: string;
    sizes?: string;
  }

  export interface ReactImageGalleryProps {
    items: ReactImageGalleryItem[];
    showNav?: boolean;
    lazyLoad?: boolean;
    showThumbnails?: boolean;
    showFullscreenButton?: boolean;
    showPlayButton?: boolean;
    showBullets?: boolean;
    autoPlay?: boolean;
    slideDuration?: number;
    slideInterval?: number;
    infinite?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    onImageLoad?: (event: React.SyntheticEvent) => void;
    onSlide?: (currentIndex: number) => void;
    onPause?: (currentIndex: number) => void;
    onScreenChange?: (fullScreen: boolean) => void;
    onPlay?: (currentIndex: number) => void;
    renderCustomControls?: () => React.ReactNode;
    renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
    renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
    renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactNode;
    renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactNode;
    renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
    renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
    useTranslate3D?: boolean;
    thumbnailPosition?: 'left' | 'right' | 'top' | 'bottom';
    startIndex?: number;
    flickThreshold?: number;
    swipeThreshold?: number;
    stopPropagation?: boolean;
    disableThumbnailScroll?: boolean;
    disableKeyDown?: boolean;
    disableSwipe?: boolean;
    isRTL?: boolean;
  }

  export default class ReactImageGallery extends React.Component<ReactImageGalleryProps> {
    public play: () => void;
    public pause: () => void;
    public fullScreen: () => void;
    public getCurrentIndex: () => number;
    public getElement: () => HTMLElement;
    public slideToIndex: (index: number) => void;
  }
}
