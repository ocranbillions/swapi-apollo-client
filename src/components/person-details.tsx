import React from 'react';

import PersonCard from './person-card';
import { PersonI } from '../@types';

const PersonDetails = (props: { person: PersonI; isPersonPage: boolean }) => {
  const { person, isPersonPage } = props;

  return <PersonCard person={person} isPersonPage={isPersonPage}/>;
}

export default PersonDetails;