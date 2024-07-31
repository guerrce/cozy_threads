import React, { FC, } from 'react';

import { AppBar, Badge, Button, Fade, IconButton, Toolbar, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { NavigationBarProps } from './types';
import CollectionsMenu from '../CollectionsMenu';


const NavigationBar: FC<NavigationBarProps> = ({
  cartCount,
  onClickHomeButton,
  onClickCartButton,
  onClickCollection,
}) => {

  const handleClickCollectionButton = () => {
    onClickCollection('all');
  };

  return (
    <>
    <AppBar>
      <Toolbar>
        <Tooltip
          title={
            <CollectionsMenu
              onClick={onClickCollection}
              collectionItems={['Men', 'Women', 'All']}
            />
          }
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <Button
            onClick={handleClickCollectionButton}
            color={'primary'}
          >
            Collections
          </Button>
        </Tooltip>
        <Button
          onClick={onClickHomeButton}
          color={'primary'}
        >
          Cozy Threads
        </Button>
        <Badge
          badgeContent={cartCount}
        >
          <IconButton onClick={onClickCartButton}>
            <Badge>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Badge>
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
};

export default NavigationBar;
