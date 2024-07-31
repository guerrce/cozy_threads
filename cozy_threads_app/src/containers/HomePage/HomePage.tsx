import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

const HomePage: FC<{}> = ({}) => {
  return (
    <Container>
      <Typography variant='h4'>
        Cozy Threads is an online retailer that sells high-quality, ethically-sourced apparel and accessories.
      </Typography>
    </Container>
  )
};

export default HomePage;
