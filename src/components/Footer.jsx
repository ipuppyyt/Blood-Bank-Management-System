import * as React from 'react';
import './css/footer.css';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div class='footer'>
          <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}>
        <Container maxWidth="sm">
          <Typography variant="p">
          &copy; {(new Date().getFullYear())} Blood Bank Management System. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
