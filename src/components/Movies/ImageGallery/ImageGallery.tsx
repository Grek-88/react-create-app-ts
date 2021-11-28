import s from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

type Props = {
  id: string,
  largeImageURL: string,
  webformatURL: string,
  tags: string
};

interface IImageGallery{
  images: Props[],
  onClick: (ev: React.BaseSyntheticEvent)=>void
}

export default function ImageGallery({ images, onClick }: IImageGallery) {
  return (
    <ul className={s.ImageGallery} onClick={onClick}>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
