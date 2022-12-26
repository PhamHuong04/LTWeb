import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
