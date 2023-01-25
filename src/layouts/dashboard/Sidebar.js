import React from 'react'
import { useTheme } from '@mui/material';
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Gear } from "phosphor-react";
import { useState } from 'react';
import { faker } from '@faker-js/faker';

// icons
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";

//MaterialUISwitch
import MaterialUISwitch from "../../components/MaterialUISwitch";

//custom hooks
import useSettings from '../../hooks/useSettings';


// sidebar imported in index.js
const Sidebar = () => {
  const theme = useTheme();

  // state for default selected button in sidebar
  const [selected, setSelected] = useState(0);

  // Themetoggle method from useSettings hook
  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            {/* App logo */}
            <img src={Logo} alt={"Chat App Logo"} />
          </Box>
          <Stack sx={{}} spacing={3}>
            {/* Nav_Buttons are imported from data folder (index.js) */}
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            {/* divider works like hr tag */}
            <Divider sx={{ width: "44px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        {/* Avatar & switch */}
        <Stack spacing={4}>
          <MaterialUISwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Sidebar