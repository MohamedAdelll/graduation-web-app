import AppNavbar from "components/Navbars/AppNavbar";
import { Outlet } from "react-router-dom";

export default function Application() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <div className="main" style={{ marginTop: "150px" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
