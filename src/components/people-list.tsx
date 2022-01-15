import React from 'react';

import Pagination from './pagination'
import PersonCard from './person-card';

const PeopleList = (props: any) => {
  const { people, pageInfo } = props;

  return (
    <div>
      <Pagination pageInfo={pageInfo}/>

      {people.map((person: any) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </div>
  )
}

export default PeopleList;