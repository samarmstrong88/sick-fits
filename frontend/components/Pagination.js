import PaginationStyles from '../components/styles/PaginationStyles';
import gql from 'graphql-tag';
import Head from 'next/head';
import { Query } from 'react-apollo';
import Link from 'next/link';

import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;


const Pagination = props => (

  <Query query={PAGINATION_QUERY} >{
    ({ data, loading, error }) => {
      if (error) return <Error error={error} />
      if (loading) return <p>..Loading</p>
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);

      return (
        <PaginationStyles>
          <Head>
            <title>Sick Fits | Page {props.page} </title>
          </Head>
          <div>


            <Link
              href={{
                pathName: '/items',
                query: { page: props.page - 1 }
              }} >
              <a aria-disabled={props.page <= 1}> &lt; </a>
            </Link>

            Page {props.page} of {pages}
            <Link
              href={{
                pathName: '/items',
                query: { page: props.page + 1 }
              }} >
              <a aria-disabled={props.page >= pages}> > </a>
            </Link>
          </div>
        </PaginationStyles>
      )
    }}
  </Query >
);


export default Pagination;