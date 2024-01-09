import { type FC } from 'react';
import { StaticImageData } from 'next/image';
import styles from './Gallery.module.css';
import Image from 'next/image';

interface IGalleryProps {
  photos: StaticImageData[];
}

const Gallery: FC<IGalleryProps> = ({ photos }) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.photos}>
        {photos.map((photo, index) => (
          <div className={styles.item} key={index}>
            <Image src={photo} alt='photo' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
