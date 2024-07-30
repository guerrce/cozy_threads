import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CartModal, { CartItemProps } from '../../components/CartModal';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useCartModal } from '../../hooks/useCartModal';

const Root: FC<{}> = ({}) => {
  const { cartModalOpen, toggleCartModal } = useCartModal();
  const navigate = useNavigate();
  const handleCloseCartModal = (): void => {toggleCartModal(false)};
  const handleClickCheckout = (): void => {
    // redirect to stripe checkout page
    console.log("checkout");
    toggleCartModal(false);
  };
  const handleClickCartButton = (): void => {toggleCartModal(true)};

  const handleClickHomeButton = (): void => {
    navigate('/')
  };
  
  // mock data
  const cartItems: CartItemProps[] = [
    {
      id: '1',
      name: "Item1",
      price: "$1.99",
      image: 'skip',
      quantity: 1,
    },
    {
      id: '2',
      name: "Item2",
      price: "$2.99",
      image: 'skip',
      quantity: 4,
    },
    {
      id: '3',
      name: "Item3",
      price: "$4.99",
      image: 'skip',
      quantity: 2,
    }
  ];

  return (
    <div>
      <NavigationBar
        onClickCartButton={handleClickCartButton}
        onClickHomeButton={handleClickHomeButton}
      />
      <CartModal
        open={cartModalOpen}
        items={cartItems}
        onClose={handleCloseCartModal}
        onClickCheckout={handleClickCheckout}
      />
      <Outlet />
    </div>
  )
};

export default Root;
