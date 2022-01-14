import React from 'react'
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import PersonCard from '../components/person-card';

import { GET_PEOPLE_QUERY } from '../graphql';

const PeoplePage = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: {searchTerm: ""}
  });

  return (
    <Layout>
      <div>
          People page
          {loading && <div>loading...</div>}
          {error && <div>An error occured...</div>}
          {data && data.getPeople?.data.map((person: any) => <PersonCard person={person} />)}
      </div>
    </Layout>
  )
}

export default PeoplePage;