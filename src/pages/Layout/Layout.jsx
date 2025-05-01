import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import CartSidebar from "../../components/CartSidebar/CartSidebar";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ landingVariant = false }) => {
  return (
    <>
      <Header landingVariant={landingVariant} />
      <CartSidebar />
      <main
        className={`${styles.main} ${landingVariant ? styles.landing : ""}`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
