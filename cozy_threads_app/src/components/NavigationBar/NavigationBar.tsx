import React, { FC, } from 'react';

import { AppBar, Badge, Fade, IconButton, Toolbar, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { NavigationBarProps } from './types';
import CollectionsMenu from '../CollectionsMenu';
import { NavigationButton } from './styled';


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
          <NavigationButton
            color="inherit"
            onClick={handleClickCollectionButton}
            sx={{ mr: 2 }}

          >
            Collections
          </NavigationButton>
        </Tooltip>
        <NavigationButton
          color="inherit"
          onClick={onClickHomeButton}
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Cozy Threads
        </NavigationButton>
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
