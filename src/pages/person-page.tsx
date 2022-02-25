import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout';
import PersonDetails from '../components/person-details';
import Modal from '../components/modal';
import QueryResultRenderer from '../components/query-result-renderer';
import Button from '../components/button';

import { GET_ALLHOMEWORLDS_QUERY, GET_PERSON_QUERY, UPDATE_PERSON_MUTATION } from '../graphql';
import useQueryParams from '../hooks/use-query-params';
import client from '../apollo/client'

const PersonPage = () => {
  const query = useQueryParams();
  const personName = query.get('name');

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PERSON_QUERY, {
    variables: { name: personName }
  });

  const { data: homeworlds } = useQuery(GET_ALLHOMEWORLDS_QUERY);

  const [updatePersonMutation] = useMutation(UPDATE_PERSON_MUTATION);
  
  const updatePerson = async(values: any) => {
    await updatePersonMutation({ variables: { 
      name: personName,
      personData: { ...values }}
    });
  }

  const handlePersonUpdate = async (values: any) => {
    await updatePerson(values)

    client.cache.reset()
    navigate(`/person?name=${values.name}`)
  }

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <div>
          <Button onClick={() => setShow(true)} btnText="edit details"/>
          <Modal 
            title="Edit Details" 
            onClose={() => setShow(false)} 
            show={show} 
            person={data?.getPerson} 
            updatePerson={handlePersonUpdate} 
            homeworlds={homeworlds}
          />
          <PersonDetails person={data?.getPerson} isPersonPage/>
        </div>
      </QueryResultRenderer>
    </Layout>
  )
}

export default PersonPage;