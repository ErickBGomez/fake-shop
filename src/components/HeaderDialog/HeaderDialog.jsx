import { Button, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";
import styles from "./HeaderDialog.module.scss";

const HeaderDialog = ({ closeDialog }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={closeDialog}></div>
      <div className={styles.headerDialog}>
        <IconButton
          variant="ghost"
          size="md"
          className={styles.close}
          onClick={closeDialog}
        >
          <X />
        </IconButton>
        <div className={styles.links}>
          <div className={styles.link}>
            <Button variant="plain" onClick={closeDialog}>
              Categories
            </Button>
          </div>
          <div className={styles.link}>
            <Button variant="plain" onClick={closeDialog}>
              Sales
            </Button>
          </div>
          <div className={styles.link}>
            <Button variant="plain" onClick={closeDialog}>
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
