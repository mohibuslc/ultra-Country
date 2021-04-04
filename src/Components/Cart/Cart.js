import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    let totalPopulation = 0; // this function used for : add cart with + population: 
    for (let i = 0; i< cart.length; i++) {
        const country = cart[i];
        
    totalPopulation = totalPopulation+country.population; 
    }
    


    return (
        <div>
            <h2>This Is Cart:{cart.length}</h2>
            <p>Population : {totalPopulation}</p>

        </div>
    );
};

export default Cart;