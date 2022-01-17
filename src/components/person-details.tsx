import React from 'react';
import { createUseStyles } from 'react-jss';

import PersonCard from './person-card';
import { PersonI } from '../@types';

const useStyles = createUseStyles(() => ({
  container: {
    maxWidth: 500,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 'auto',
    marginTop: 30
  }
}));

const PersonDetails = (props: { person: PersonI; isPersonPage: boolean }) => {
  const s = useStyles();
  const { person, isPersonPage } = props;

  return (
    <div className={s.container}>
      <PersonCard person={person} isPersonPage={isPersonPage}/>
    </div>
    )
}

export default PersonDetails;