import React, { Component } from "react"
import styled from 'styled-components';
import { Query } from "react-apollo";
import Title from './styles/Title';

import { SINGLE_ITEM_QUERY } from "./UpdateItem";

const StyledSingleItem = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-template-rows: auto;
  align-content: :start;
  min-height: 600px;
  align-items: start;
  img {
    height: 100%;
    width: 100%;
    max-width: 500px;
    object-fit: contain;
    padding: 2rem;

  }
  .details {
    padding: 2rem;
  }
  `


class SingleItem extends Component {
  render() {
    console.log(this.props);
    //SingleItem should be passed an item Id, then calls graphQL to fetch the item
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>{
        ({ data, loading, error }) => {
          console.log(data);
          if (loading) return <p>...Loading</p>;
          if (error) return <Error error={error} />
          return (
            <StyledSingleItem>
              <img src={data.item.image} alt={data.item.title} />
              <div className="details">
                <Title><a href=''>{data.item.title}</a></Title>
                <div>{data.item.description}</div>

              </div>
            </StyledSingleItem>
          );
        }
      }
      </Query >
    )
  }
}
export default SingleItem;