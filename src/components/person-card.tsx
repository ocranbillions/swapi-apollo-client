import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { CustomThemeI, PersonI } from '../@types';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  card: {
    background: theme.colors.darkBlack,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    padding: 20,
    '&:hover': {
      background: theme.colors.lightBlack,
    },
    '& *': {
      color: theme.colors.textColor,
    }
  },
  disableClick: {
    pointerEvents: 'none'
  },
  cardTitle: {
    fontSize: 24,
    marginTop: 0,
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    '& span:nth-child(1)': {
      flex: 1,
    },
    '& span:nth-child(2)': {
      flex: 4,
    }
  },
  divider: {
    width: '100%',
    marginTop: 20,
    marginBottom: 0,
  },
  homeworldTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: theme.colors.grey
  },
  homeworldDetails: {
    display: 'flex',
    fontSize: 13,
    '& *': {
      color: theme.colors.grey
    }
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }
}));


const PersonCard = (props: { person: PersonI, isPersonPage: boolean }) => {
  const s = useStyles();
  const { person, isPersonPage } = props;
  const { homeworld } = person;

  return (
    <Link to={`/person?name=${person.name}`} className={clsx(s.card, isPersonPage && s.disableClick)}>
      <h4 className={s.cardTitle}>{person.name}</h4>
      <section>
        <div className={s.row}>
          <span>Height</span>
          <span>{person.height}</span>
        </div>
        <div className={s.row}>
          <span>Mass</span>
          <span>{person.mass}</span>
        </div>
        <div className={s.row}>
          <span>Gender</span>
          <span>{person.gender}</span>
        </div>
      </section>
      <hr className={s.divider}/>
      <section>
        <h3 className={s.homeworldTitle}>
          Homewrld: {homeworld.name}
        </h3>
        <div className={s.homeworldDetails}>
          <div className={s.column}>
            <span>rotation_period</span>
            <span>orbital_period</span>
            <span>diameter</span>
            <span>climate</span>
            <span>gravity</span>
            <span>terrain</span>
            <span>surface_water</span>
            <span>population</span>
          </div>
          <div className={s.column}>
            <span>{homeworld.rotation_period}</span>
            <span>{homeworld.orbital_period}</span>
            <span>{homeworld.diameter}</span>
            <span>{homeworld.climate}</span>
            <span>{homeworld.gravity}</span>
            <span>{homeworld.terrain}</span>
            <span>{homeworld.surface_water}</span>
            <span>{homeworld.population}</span>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default PersonCard;
