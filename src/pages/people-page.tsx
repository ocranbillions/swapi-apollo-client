import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import PeopleList from '../components/people-list';
import Modal from '../components/modal';
import QueryResultRenderer from '../components/query-result-renderer';

import useQueryParams from '../hooks/use-query-params';
import { GET_PEOPLE_QUERY } from '../graphql';

const PeoplePage = () => {
  const query = useQueryParams();
  const pageNumber = query.get('page');

  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: { page: pageNumber }
  });

  return (
    <Layout>
      <QueryResultRenderer error={error} loading={loading} data={data}>
        <div>
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="Add new person" onClose={() => setShow(false)} show={show} />

        <PeopleList people={data?.getPeople.data} pageInfo={{...data?.getPeople.page, pageNumber}} />
        </div>
      </QueryResultRenderer>
    </Layout>
  );
}

export default PeoplePage;
