import React from 'react';

const Cart = (props) => {

    const cart = props.cart
    return (
        <div>
            <h2>This Is Cart:{cart.length}</h2>
        </div>
    );
};

export default Cart;