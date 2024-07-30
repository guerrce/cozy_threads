export interface ItemTileProps {
  title?: string,
  description?: string,
  image?: string;
  price?: string,
  onClick: () => void;
  onAddToCart: () => void;
};
