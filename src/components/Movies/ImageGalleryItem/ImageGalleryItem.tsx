import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

interface IImageGalleryItem{
  image: string,
  largeImageURL: string,
  tags: string
}

export default function ImageGalleryItem({ image, largeImageURL, tags }: IImageGalleryItem) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image}
        alt={tags}
        data-bigurl={largeImageURL}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}
