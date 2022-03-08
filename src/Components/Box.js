import * as React from 'react';
import Box from '@mui/material/Box';

export default function Container({width,height,backgroundColor,border,display,padding,children}) {
  return (
    <Box
    children={children}
      sx={{
        display: display,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        border: border,
        padding: padding
      }}
    > 
    
    </Box>
  );
}