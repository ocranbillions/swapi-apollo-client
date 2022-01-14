import React from 'react';
import { useQuery } from '@apollo/client';

import useQueryParams from '../hooks/use-query-params';
import { GET_PEOPLE_QUERY } from '../graphql'

const PersonDetails = (props: any) => {
  const query = useQueryParams();
  const personName = query.get("name");

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: {searchTerm: personName}
  });

  return (
    <div>
      person details here
      {data && <div>{data.getPeople?.data[0]?.name}</div>}
    </div>
  )
}

export default PersonDetails;