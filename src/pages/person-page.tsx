import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout';
import PersonDetails from '../components/person-details';
import Modal from '../components/modal';
import QueryResultRenderer from '../components/query-result-renderer';

import { GET_PERSON_QUERY, UPDATE_PERSON_MUTATION } from '../graphql';
import useQueryParams from '../hooks/use-query-params';
import Button from '../components/button';

const PersonPage = () => {
  const query = useQueryParams();
  const personName = query.get('name');

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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

    navigate(`/person?name=${values.name}`)
  }

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <div>
          <Button onClick={() => setShow(true)} btnText="Edit Details"/>
          <Modal title="Edit Details" onClose={() => setShow(false)} show={show} person={data?.getPerson} updatePerson={updatePerson}/>
          <PersonDetails person={data?.getPerson} isPersonPage/>
        </div>
      </QueryResultRenderer>
    </Layout>
  )
}

export default PersonPage;