import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Item from "./Item.js";
import ItemCount from "./ItemCount.js";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/06ba8cd7-8a5b-494f-a27b-93e4b80845f5")
      .then((response) => response.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <Card.Group>
      {products.map((product) => {
        return (
          <div className="ItemContainer">
            <Link to={`/ProductDetails/${product.id}`}>
              <Item
                image={product.image}
                name={product.name}
                price={product.price}
                stock={product.stock}
              ></Item>
            </Link>
            <ItemCount stock={product.stock}></ItemCount>
          </div>
        );
      })}
    </Card.Group>
  );
};

export default ItemList;
