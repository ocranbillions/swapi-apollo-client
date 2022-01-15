import React from 'react';
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import PeopleList from '../components/people-list';
import QueryResultRenderer from '../components/query-result-renderer';

import useQueryParams from '../hooks/use-query-params';
import { GET_PEOPLE_QUERY } from '../graphql';

const PeoplePage = () => {
  const query = useQueryParams();
  const pageNumber = query.get('page');

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: { page: pageNumber }
  });

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <PeopleList people={data?.getPeople.data} pageInfo={{...data?.getPeople.page, pageNumber}} />
      </QueryResultRenderer>
    </Layout>
  );
}

export default PeoplePage;
