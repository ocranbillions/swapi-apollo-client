import React from 'react'
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import PersonCard from '../components/person-card';
import QueryResultRenderer from '../components/query-result-renderer';

import { GET_PEOPLE_QUERY } from '../graphql';

const PeoplePage = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY);

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        {data?.getPeople?.data.map((person: any) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </QueryResultRenderer>
    </Layout>
  );
}

export default PeoplePage;
