import { Image as ChakraImage } from "@chakra-ui/react";
import { ImageOff } from "lucide-react";
import styles from "./Image.module.scss";

const Image = ({ src, alt, rounded = "md" }) => {
  return (
    <>
      {src ? (
        <ChakraImage src={src} alt={alt} rounded={rounded} />
      ) : (
        <div className={styles.fallbackImage}>
          <ImageOff />
        </div>
      )}
    </>
  );
};

export default Image;
