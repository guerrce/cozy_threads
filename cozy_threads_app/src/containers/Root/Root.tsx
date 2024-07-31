import React, { FC, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CartModal from '../../components/CartModal';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { CartContext, CartContextType } from '../../context/CartContext';
import { useCart } from '../../hooks/useCart';
import { useCartModal } from '../../hooks/useCartModal';

const Root: FC<{}> = ({}) => {
  const { cartModalOpen, toggleCartModal } = useCartModal();
  const {
    cartItems,
    cartCount,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
  } = useCart(useContext(CartContext) as CartContextType)
  const navigate = useNavigate();

  const handleCloseCartModal = (): void => {toggleCartModal(false)};

  const handleClickCartButton = (): void => {toggleCartModal(true)};

  const handleClickHomeButton = (): void => {
    navigate('/')
  };

  const handleClickCollection = (collectionName: string): void => {
    navigate(`collection/${collectionName.toLowerCase()}`);
  };

  return (
    <div>
      <NavigationBar
        cartCount={cartCount}
        onClickCartButton={handleClickCartButton}
        onClickHomeButton={handleClickHomeButton}
        onClickCollection={handleClickCollection}
      />
      <CartModal
        open={cartModalOpen}
        items={cartItems}
        onClose={handleCloseCartModal}
        onClickCheckout={handleCheckout}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Outlet />
    </div>
  )
};

export default Root;
