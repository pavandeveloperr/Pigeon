import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
               return <Timeline el={el}/> 
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={el} />

                case "doc":
                  // Doc imsg
                  break;

                case "link":
                  // link msg
                  break;

                case "reply":
                  // reply msg
                    return <ReplyMsg el={el} />

                default:
                    // Text Msg
                  return <TextMsg el={el} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message