import { useState } from "react";

export const useCartModal = (): {
  cartModalOpen: boolean,
  toggleCartModal: (state: boolean) => void,
} => {
  const [ open, setOpen ] = useState<boolean>(false);
  
  const toggleCartModal = (state: boolean): void => {
    setOpen(state);
  };

  return {
    cartModalOpen: open,
    toggleCartModal
  };
};
