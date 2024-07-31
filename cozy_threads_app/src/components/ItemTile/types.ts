export interface ItemTileProps {
  title?: string,
  description?: string,
  image?: string;
  priceUnits?: number,
  priceCurrency?: string,
  onClick: () => void;
  onAddToCart: () => void;
};
