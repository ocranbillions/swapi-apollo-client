import React from 'react';
import { createUseStyles } from 'react-jss';

import { PeopleListPropsI, PersonI } from '../@types';
import Pagination from './pagination'
import PersonCard from './person-card';

const useStyles = createUseStyles(() => ({
  listContainer: {
    display: 'grid',
    gridGap: 24,
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
  '@media only screen and (max-width: 960px)': {
    listContainer: {
      paddingLeft: 50,
      paddingRight: 50,
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  '@media only screen and (max-width: 760px)': {
    listContainer: {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))'
    }
  }
}));


const PeopleList = (props: PeopleListPropsI) => {
  const s = useStyles();
  const { people, pageInfo } = props;

  return (
    <div>
      <Pagination pageInfo={pageInfo}/>
      <div className={s.listContainer}>
        {people.map((person: PersonI) => (
          <PersonCard key={person.name} person={person} isPersonPage={false} />
        ))}
      </div>
    </div>
  )
}

export default PeopleList;
