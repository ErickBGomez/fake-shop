import { useState } from "react";
import styles from "./ImagesPreview.module.scss";
import Image from "../Image/Image";

const ImagesPreview = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.imagesPreview}>
      <div className={styles.selectList}>
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            {...image}
            rounded="md"
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
      <div className={styles.image}>
        <Image src={images[selectedImage]} rounded="md" />
      </div>
    </div>
  );
};

export default ImagesPreview;
