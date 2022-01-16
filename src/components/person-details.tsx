import React from 'react';

import PersonCard from './person-card';

const PersonDetails = (props: any) => {
  const { data, isPersonPage } = props;
  const person = data.getPerson;

  return <PersonCard person={person} isPersonPage={isPersonPage}/>;
}

export default PersonDetails;
