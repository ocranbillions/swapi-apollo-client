import React from 'react';
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import PersonDetails from '../components/person-details';
import QueryResultRenderer from '../components/query-result-renderer';

import { GET_PEOPLE_QUERY } from '../graphql';
import useQueryParams from '../hooks/use-query-params';


const PersonPage = () => {
  const query = useQueryParams();
  const personName = query.get('name');

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: {searchTerm: personName}
  });

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <PersonDetails data={data}/>
      </QueryResultRenderer>
    </Layout>
  )
}

export default PersonPage;