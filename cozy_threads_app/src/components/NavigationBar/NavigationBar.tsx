import React, { FC, MouseEventHandler, useState } from 'react';

import { AppBar, Badge, Button, Icon, IconButton, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { NavigationBarProps } from './types';
import CollectionsMenu from '../CollectionsMenu';


const NavigationBar: FC<NavigationBarProps> = ({
  onClickHomeButton,
  onClickCartButton,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleOpenMenu = (): void => {
    setMenuOpen(true);
  };
  const handleButtonHover = (event: any): void => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
    handleOpenMenu();
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const onClickCollection = (): void => {};

  return (
    <>
    <AppBar>
      <Toolbar>
        <Button
          onClick={onClickCollection}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleCloseMenu}
        >
          Collections
        </Button>
        <CollectionsMenu
          anchorEl={anchorEl}
          onClick={() => {}}
          collectionItems={['Men', 'Women', 'All']}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />

        <Button onClick={onClickHomeButton}>
          Cozy Threads
        </Button>
        <IconButton onClick={onClickCartButton}>
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
};

export default NavigationBar;
