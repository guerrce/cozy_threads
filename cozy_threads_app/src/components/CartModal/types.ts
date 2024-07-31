import { CartItemData } from "../../context/CartContext";

export type CartItemProps = {
  id: string,
  name: string,
  priceCurrency: string,
  priceUnits: number,
  priceId: string,
  image?: string,
  quantity: number,
}

export interface CartModalProps {
  open: boolean;
  items: CartItemProps[];
  onClose: () => void;
  onClickCheckout: () => void;
  onAddToCart: (id: string, item: CartItemData) => void;
  onRemoveFromCart: (id: string) => void;
};
