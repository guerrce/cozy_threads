export interface NavigationBarProps {
  cartCount: number;
  onClickHomeButton: () => void;
  onClickCartButton: () => void;
  onClickCollection: (collectionName: string) => void;
};
