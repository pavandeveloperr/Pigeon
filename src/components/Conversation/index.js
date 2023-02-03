import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";


// this component is rendered in generalApp
const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* messsages */}
      <Box width="100%" sx={{ flexGrow: 1 }}>
        <Message />

      </Box>

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
