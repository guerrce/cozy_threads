export type CartItemProps = {
  id: string,
  name: string,
  price: string,
  image: string,
  quantity: number,
}

export interface CartModalProps {
  open: boolean;
  items: CartItemProps[];
  onClose: () => void;
  onClickCheckout: () => void;
};
