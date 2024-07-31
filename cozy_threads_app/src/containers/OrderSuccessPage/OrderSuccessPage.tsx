import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

const OrderSuccessPage: FC<{}> = ({}) => {
  return (
    <Container>
      <Typography variant="h4" >
        Order Processed Successfully!
      </Typography>
    </Container>
  )
};

export default OrderSuccessPage;
