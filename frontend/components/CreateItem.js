import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
// import { DataStore } from "apollo-client/data-store";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "Dog",
    description: "What a cool dog",
    image: "dog.jpg",
    largeImage: "bigdog.jpg",
    price: 20000,
    imageLoading: false
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    this.setState({ imageLoading: true });
    console.log("Uploading image");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sick-fits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diadrv9rv/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
    this.setState({ imageLoading: false });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // stop the page reload
              e.preventDefault();
              // pull the new item from GQL and prisma DB
              const res = await createItem();
              Router.push({
                pathname: "/item",
                query: { id: res.data.createItem.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Choose an image"
                  required
                  onChange={this.uploadFile}
                />
              </label>
              {this.state.image && <img src={this.state.image} />}
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder={0}
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit" disabled={this.state.imageLoading}>
                Submit
              </button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
