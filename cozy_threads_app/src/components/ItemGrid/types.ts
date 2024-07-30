export type ItemProps = {
  id: string,
  title?: string,
  description?: string,
  image?: string,
  price?: string,
}

export interface ItemGridProps {
  items: ItemProps[],
  onClickItem: (id: string) => void;
  onAddToCart: (id: string) => void;
};
