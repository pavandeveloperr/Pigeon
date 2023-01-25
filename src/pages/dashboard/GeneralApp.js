import {Stack, Box, useTheme } from "@mui/material";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";

// generalApp renders Chats and Conversation box
const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "Calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        {/* Conversation Box */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
