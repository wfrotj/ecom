import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
