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

function Header({ cartCount }) {
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
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          🛍 ShopSphere
        </Typography>

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
          <a
            href="#products"
            className="font-medium no-underline text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Products
          </a>

          <a
            href="#categories"
            className="font-medium no-underline text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Categories
          </a>

          <a
            href="#cart"
            className="font-medium no-underline text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Cart
          </a>
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