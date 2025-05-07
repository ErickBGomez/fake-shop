import { Button } from "@chakra-ui/react";
import { X } from "lucide-react";
import styles from "./HeaderDialog.module.scss";

const HeaderDialog = ({ handleDialogState }) => {
  const handleClose = () => {
    handleDialogState(false);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={handleClose}></div>
      <div className={styles.headerDialog}>
        <div className={styles.close}>
          <X onClick={handleClose} />
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Button variant="plain" onClick={handleClose}>
              Categories
            </Button>
          </div>
          <div className={styles.link}>
            <Button variant="plain" onClick={handleClose}>
              Sales
            </Button>
          </div>
          <div className={styles.link}>
            <Button variant="plain" onClick={handleClose}>
              New
            </Button>
          </div>
        </div>

        <div className={styles.account}>
          <Button colorPalette="brand">Create account</Button>
          <Button colorPalette="brand" variant="outline">
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeaderDialog;
