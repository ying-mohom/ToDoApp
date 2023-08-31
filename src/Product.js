import React from "react";


function Product() {
    const products = [
        { id: 1, name: "Laptop", price: 500 },
        { id: 2, name: "Phone", price: 200 },
        { id: 3, name: "Modem", price: 300 },
        { id: 4, name: "Laptop", price: 500 },
        { id: 5, name: "Computer", price: 700 },

    ]
    const fruits = ["Mango", "Apple", "Orange", "Grape", "Watermelon"];


    const displayProduct = products.map((product) => <h3 key={product.id}>{product.name}: ${product.price}</h3>)
    const displayFruit = fruits.map((fruit, i) => <h3 key={i}>{fruit}</h3>)
    return (
        <>
            {/* {products.map((product) => <h3>{product}</h3>)} */}
            <h1>Rendering Object</h1>
            {displayProduct}<br />
            <h1>Rendering Array</h1>
            {displayFruit}<br />
        </>
    );
}

export default Product;