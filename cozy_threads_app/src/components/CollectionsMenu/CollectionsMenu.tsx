import { Menu, MenuItem, MenuList } from '@mui/material';
import React, { FC } from 'react';
import { CollectionsMenuProps } from './types';

const CollectionsMenu: FC<CollectionsMenuProps> = ({
  collectionItems,
  anchorEl,
  handleCloseMenu,
  handleOpenMenu,

}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
      MenuListProps={{
        onMouseEnter: handleOpenMenu,
        onMouseLeave: handleCloseMenu
      }}
    >
      {collectionItems.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </Menu>
  )
};

export default CollectionsMenu;
