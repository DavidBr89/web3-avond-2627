import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
