// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
//   AppBar,
//   Toolbar,
//   Typography,
//   CssBaseline,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import Person2Icon from "@mui/icons-material/Person2";
// import BadgeIcon from "@mui/icons-material/Badge";
// import LogoutIcon from "@mui/icons-material/Logout";

// const navItems = [
//   { text: "MY MOVES", path: "/", icon: <LocalShippingIcon /> },
//   { text: "MY PROFILE", path: "/profile", icon: <Person2Icon /> },
//   { text: "GET QUOTE", path: "/quote", icon: <BadgeIcon /> },
//   { text: "LOGOUT", path: "/logout", icon: <LogoutIcon /> },
// ];

// const SideBar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [selectedTab, setSelectedTab] = useState(navItems[0].path);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const handleClick = (path) => {
//     setSelectedTab(path);
//   };

//   const drawer = (
//     <div>
//       <List>
//         {navItems.map((item) => (
//           <ListItem
//             button
//             key={item.text}
//             component={Link}
//             to={item.path}
//             onClick={() => {
//               handleClick(item.path);
//               if (isMobile) handleDrawerToggle();
//             }}
//             sx={{
//               borderLeft:
//                 selectedTab === item.path
//                   ? `4px solid red`
//                   : "4px solid transparent",
//               pl: 2, // Padding-left to align text properly
//             }}
//           >
//             <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} sx={{ marginLeft: 1 }} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div style={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           {isMobile && (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" noWrap>
//             Boxigo
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant={isMobile ? "temporary" : "permanent"}
//           open={isMobile ? mobileOpen : true}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </div>
//   );
// };
// export default SideBar;

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Person2Icon from "@mui/icons-material/Person2";
import BadgeIcon from "@mui/icons-material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";

const navItems = [
  { text: "MY MOVES", path: "/", icon: <LocalShippingIcon /> },
  { text: "MY PROFILE", path: "/profile", icon: <Person2Icon /> },
  { text: "GET QUOTE", path: "/quote", icon: <BadgeIcon /> },
  { text: "LOGOUT", path: "/logout", icon: <LogoutIcon /> },
];

const SideBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(navItems[0].path);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (path) => {
    setSelectedTab(path);
  };

  const drawer = (
    <div>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => {
              handleClick(item.path);
              if (isMobile) handleDrawerToggle();
            }}
            sx={{
              borderLeft:
                selectedTab === item.path
                  ? `4px solid red`
                  : "4px solid transparent",
              pl: 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            {/* <ListItemText
              primary={item.text}
              sx={{ marginLeft: 1 }}
            /> */}
            <Typography sx={{ marginLeft: 1, fontWeight: "bold" }}>
              {item.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <nav>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default SideBar;
