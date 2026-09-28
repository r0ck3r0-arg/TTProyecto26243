import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="topbar">
        <Header />
        <NavBar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
