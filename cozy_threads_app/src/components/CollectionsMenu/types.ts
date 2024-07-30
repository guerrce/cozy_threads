export enum CollectionType {
  All,
  Men,
  Women,
};

export interface CollectionsMenuProps {
  anchorEl: HTMLElement | null;
  collectionItems: string[];
  onClick: (collectionString: string) => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
};
