import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { FC } from 'react';

const ErrorPage: FC<{}> = ({}) => {
  return (
    <Container>
      <Typography variant="h3">
        404
      </Typography>
      <Typography variant="h4">
        Page not found
      </Typography>
    </Container>
  )
};

export default ErrorPage;
