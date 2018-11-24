import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "./Items";
import Link from "next/link";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export default class DeleteItem extends Component {
  deleteItem = (e, deleteItemMutation) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this item?")) {
      const res = deleteItemMutation({
        variables: {
          id: this.props.id
        }
      });
    }
  };

  update = (cache, payload) => {


    //read cache data
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    //compare to deleted id
    console.log(data);
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });


    cache.write;
    // remove the deleted file from cache
    //push data to cache
  };

  render() {
    return (

      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { data, loading }) => {
          // if (loading) return <p>Loading...</p>;
          return (
            // <div onClick={e => console.log(e)}>div</div>
            <button onClick={e => this.deleteItem(e, deleteItem)}>
              Delete
            </button>
          );
        }}
      </Mutation>
    );
  }
}
