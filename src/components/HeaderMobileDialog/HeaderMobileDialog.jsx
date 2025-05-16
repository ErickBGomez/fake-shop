import { Button, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";
import styles from "./HeaderMobileDialog.module.scss";
import { motion, AnimatePresence } from "motion/react";

const HeaderMobileDialog = ({ dialogState, closeDialog }) => {
  return (
    <AnimatePresence>
      {dialogState && (
        <>
          <motion.div
            className={styles.backdrop}
            onClick={closeDialog}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            className={styles.headerMobileDialog}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileDialog;
