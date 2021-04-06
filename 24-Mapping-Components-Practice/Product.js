import React from "react";

function Product(props) {
  /* IFF more alternative/elegant solution is being used than 
   * 'name', 'description' fields need to accessed like this e.g.:
     {props.product.name} */
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        <b>Price:</b>
        {props.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p>
        <b>Description:</b>
        {props.description}
      </p>
      <hr />
    </div>
  );
}

export default Product;
