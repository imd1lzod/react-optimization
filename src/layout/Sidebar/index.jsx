import { NavLink } from "react-router";
import { SidebarWrapper } from "./Sidebar.styles";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h3>Sidebar</h3>
      <ul>
        <li>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/dashboard/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/dashboard/posts"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/dashboard/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </SidebarWrapper>
  );
};
