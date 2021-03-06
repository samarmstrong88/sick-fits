import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    // if (item.length < 1) return <p>No item found</p>;
    return (
      <ItemStyles>
        <Link href={{ pathname: "/item", query: { id: item.id } }}>
          <div>
            <a>
              {item.image && <img src={item.image} alt={item.title} />}
            </a>
            <Title><a>{item.title}</a></Title>
          </div>
        </Link>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{ pathname: "/update", query: { id: item.id } }}>
            <button>Edit</button>
          </Link>
          <button>Add To Cart</button>
          <DeleteItem id={this.props.item.id}>Delete</DeleteItem>
        </div>
      </ItemStyles >
    );
  }
}
