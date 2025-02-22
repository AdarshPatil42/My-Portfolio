import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default SharedLayout;
