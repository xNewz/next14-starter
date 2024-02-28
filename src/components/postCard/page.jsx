import Link from "next/link";
import Image from "next/image";
import styles from "./postCard.module.css";

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/12430326/pexels-photo-12430326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          ></Image>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id
          porro delectus, necessitatibus suscipit, ab iusto blanditiis ut
          recusandae rem, animi et. Doloremque molestias repellat modi
          voluptatum perspiciatis excepturi dolorem.
        </p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};
export default postCard;
