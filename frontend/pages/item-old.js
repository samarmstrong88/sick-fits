import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Item from "../components/Item";
import { SINGLE_ITEM_QUERY } from "../components/UpdateItem";


// const SINGLE_ITEM_QUERY = gql`
//   query SINGLE_ITEM_QUERY($id: ID!) {
//     item(where: { id: $id }) {
//       id
//       title
//       description
//       price
//     }
//   }
// `;

class item extends Component {
  render() {

    return (
      < Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.query.id }}>{
        ({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <Error error={error} />
          console.log(data);
          return <Item item={data.item} />
        }
      }
      </Query >


    );
  }
}

// const item = () => {
//   return <p>item</p>
// }

export default item;
