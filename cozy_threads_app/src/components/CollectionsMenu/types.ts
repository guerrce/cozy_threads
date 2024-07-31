export enum CollectionType {
  All,
  Men,
  Women,
};

export interface CollectionsMenuProps {
  collectionItems: string[];
  onClick: (collectionString: string) => void;
};
