import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Layout from '../components/layout';
import PersonDetails from '../components/person-details';
import Modal from '../components/modal';
import QueryResultRenderer from '../components/query-result-renderer';

import { GET_PERSON_QUERY, UPDATE_PERSON_MUTATION } from '../graphql';
import useQueryParams from '../hooks/use-query-params';


const PersonPage = () => {
  const query = useQueryParams();
  const personName = query.get('name');

  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_PERSON_QUERY, {
    variables: { name: personName }
  });

  const [updatePersonMutation] = useMutation(UPDATE_PERSON_MUTATION);
  
  const updatePerson = async(values: any) => {
    await updatePersonMutation({ variables: { 
      name: personName,
      personData: { ...values }},
      refetchQueries: () => [{
        query: GET_PERSON_QUERY,
        variables: { name: values.name }
      }],
    });
  }

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <div>
          <button onClick={() => setShow(true)}>Show Modal</button>
          <Modal title="Update Person Details" onClose={() => setShow(false)} show={show} person={data?.getPerson} updatePerson={updatePerson}/>

          <PersonDetails person={data?.getPerson} isPersonPage/>
        </div>
      </QueryResultRenderer>
    </Layout>
  )
}

export default PersonPage;