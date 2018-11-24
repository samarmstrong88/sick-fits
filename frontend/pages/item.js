import SingleItem from '../components/SingleItem';
// item pulls the query from the global queryProvider and passes it to the SingleItem element
const item = ({ query }) => {

  return (
    < div >
      < SingleItem id={query.id} />
    </div >
  )
}

export default item;