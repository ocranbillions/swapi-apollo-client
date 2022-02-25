import React, { useState, useEffect, FormEvent } from 'react';
import { useQuery  } from '@apollo/client';
import { createUseStyles } from 'react-jss';

import { GET_ALLHOMEWORLDS_QUERY } from '../graphql';
import QueryResultRenderer from './query-result-renderer';

const useStyles = createUseStyles(() => ({
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 15,
    height: 30,
    alignItems: 'center'
  },
  label: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  errorText: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 20,
    color: 'red'
  },
  submitBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& input[type="submit"]': {
      width: 100,
    }
  }
}));

const Form = (props: any) => {
  const s = useStyles();
  const [errorMessage, setErrorMessage] = useState('');

  let name: HTMLInputElement;
  let height: HTMLInputElement;
  let mass: HTMLInputElement;
  let gender: HTMLSelectElement;
  let homeworld: HTMLSelectElement;

  const { loading, error, data } = useQuery(GET_ALLHOMEWORLDS_QUERY);

  useEffect(() => {
    const { person } = props;
    if(person && name) {
      name.value = person.name
      height.value = person.height
      mass.value = person.mass
      gender.value = person.gender
      homeworld.value = person.homeworld.id
    }
  }, [props.person])

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if(!name.value || !height.value || !mass.value || !gender.value || !homeworld.value) {
      setErrorMessage('All fields are required!')
      return;
    }

    try {
      props.person ? (
          await props.updatePerson({
          name: name.value,
          height: parseInt(height.value, 10),
          mass: parseInt(mass.value, 10),
          gender: gender.value,
          homeworldId: parseInt(homeworld.value, 10)
        })
      ) : (
        await props.createPerson({
          name: name.value,
          height: parseInt(height.value, 10),
          mass: parseInt(mass.value, 10),
          gender: gender.value,
          homeworldId: parseInt(homeworld.value, 10)
        })
      )
      
      props.closeModal();
    } catch(err: any) {
      setErrorMessage(err.message)
    }
  }

  return (
    <QueryResultRenderer error={error} loading={loading} data={data}>
      <form onSubmit={e => submitHandler(e)}>
        <div className={s.row}>
          <label className={s.label}>Name</label>
          <input className={s.input} type="text" name="name" ref={node => name = node as HTMLInputElement}/><br/>
        </div>
        <div className={s.row}>
          <label className={s.label}>Height</label>
          <input className={s.input} type="number" min="1" name="height" ref={node => height = node as HTMLInputElement}/>
        </div>
        <div className={s.row}>
          <label className={s.label}>Mass</label>
          <input className={s.input} type="number" min="1" name="mass" ref={node => mass = node as HTMLInputElement}/>
        </div>
        <div className={s.row}>
          <label className={s.label}>Gender</label>
          <select className={s.input} id="gender" name="gender" ref={node => gender = node as HTMLSelectElement}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div className={s.row}>
          <label className={s.label}>Homeworld</label>
          <select className={s.input} id="homeworld" name="homeworld" ref={node => homeworld = node as HTMLSelectElement}>
            {data?.getAllHomeworlds.map((homeworld: any) => <option key={homeworld.id} value={homeworld.id}>{homeworld.name}</option>)}
          </select>
        </div>
        <div className={s.errorText}>{errorMessage && <small>{errorMessage}</small>}</div>
        <div className={s.submitBtn}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </QueryResultRenderer>
  )
}

export default Form;