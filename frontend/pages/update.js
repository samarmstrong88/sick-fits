import UpdateItem from "../components/UpdateItem";

const update = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default update;
