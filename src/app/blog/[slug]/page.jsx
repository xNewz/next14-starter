import Image from "next/image";
import styles from "./singlePost.module.css";

const SiglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18844201/pexels-photo-18844201/free-photo-of-woman-reading-newspaper-on-ship.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae
          quia, voluptatem quasi incidunt eveniet repellendus adipisci dolore
          reprehenderit enim optio vitae expedita doloremque illo sapiente
          corrupti molestiae ipsa id.
        </div>
      </div>
    </div>
  );
};

export default SiglePostPage;
