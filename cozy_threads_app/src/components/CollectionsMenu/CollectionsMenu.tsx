import { Menu, MenuItem, MenuList } from '@mui/material';
import React, { FC } from 'react';
import { CollectionsMenuProps } from './types';

const CollectionsMenu: FC<CollectionsMenuProps> = ({
  collectionItems,
  onClick,
}) => {
  return (
    <MenuList>
      {collectionItems.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => {onClick(item)}}
        >
          {item}
        </MenuItem>
      ))}
    </MenuList>
  )
};

export default CollectionsMenu;
