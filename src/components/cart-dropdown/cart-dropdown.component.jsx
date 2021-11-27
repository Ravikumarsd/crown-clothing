import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

const CartDropDown = () => {
  return (
    <div>
      <div className='cart-dropdown'>
        <CustomButton
        //   onClick={() => {
        //     history.push('/checkout')
        //     dispatch(toggleCartHidden())
        //   }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  )
}

export default CartDropDown
