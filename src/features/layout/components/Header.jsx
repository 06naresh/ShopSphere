import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import {
  CartBadge,
} from "../../cart";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header({ cartCount }) {

  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `
      font-medium
      no-underline
      transition
      ${isActive
      ? "text-blue-600 dark:text-blue-400"
      : "text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
    }
    `;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom:
          "1px solid",
        borderColor:
          "divider",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1280px",
          width: "100%",
          mx: "auto",
        }}
      >

        <Link
          to="/"
          className="flex-1 no-underline"
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              flexGrow: 1,
            }}
          >
            🛍 ShopSphere
          </Typography>
        </Link>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: 3,
          }}
        >

          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={navClass}
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={navClass}
          >
            Cart
          </NavLink>

          <NavLink
            to="/admin"
            className={navClass}
          >
            Admin
          </NavLink>
        </Box>

        <Box sx={{ ml: 3 }}>
          <CartBadge
            count={cartCount}
          />
        </Box>

        <IconButton
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            ml: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;