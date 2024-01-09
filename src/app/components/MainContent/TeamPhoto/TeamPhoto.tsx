import styles from './TeamPhoto.module.css';
import Image from 'next/image';
import photo from './img/Agency-img-1.jpg';

const TeamPhoto = () => {
  return (
    <section className={styles.teamPhoto}>
      <div className={styles.photoWrapper}>
        <Image className={styles.photo} src={photo} alt='photo' />
      </div>
    </section>
  );
};

export default TeamPhoto;
