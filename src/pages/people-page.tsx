import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout';
import PeopleList from '../components/people-list';
import Modal from '../components/modal';
import Button from '../components/button';
import QueryResultRenderer from '../components/query-result-renderer';

import useQueryParams from '../hooks/use-query-params';
import { GET_PEOPLE_QUERY, CREATE_PERSON_MUTATION } from '../graphql';
import client from '../apollo/client'

const PeoplePage = () => {
  const query = useQueryParams();
  const pageNumber = query.get('page');

  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: { page: pageNumber }
  });

  const navigate = useNavigate();
  const [createPersonMutation] = useMutation(CREATE_PERSON_MUTATION);
  
  const createPerson = async(values: any) => {
    const { totalPeople } = data?.getPeople.page
    const ITEMS_PER_PAGE = 10;
    const lastPageNumber = Math.ceil(parseInt(totalPeople + 1) / ITEMS_PER_PAGE);

    await createPersonMutation({ variables: { 
      personData: { ...values }},
      refetchQueries: () => [{
        query: GET_PEOPLE_QUERY,
        variables: { page: lastPageNumber.toString() },
        fetchPolicy: 'no-cache'
      }],
    });

    client.cache.reset()
    navigate(`/?page=${lastPageNumber}`)
  }
  
  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <>
          <Button onClick={() => setShow(true)} btnText="Add Person"/>
          <Modal title="Add new person" onClose={() => setShow(false)} show={show} createPerson={createPerson}/>
          <PeopleList people={data?.getPeople.data} pageInfo={{...data?.getPeople.page, pageNumber}} />
        </>
      </QueryResultRenderer>
    </Layout>
  );
}

export default PeoplePage;
