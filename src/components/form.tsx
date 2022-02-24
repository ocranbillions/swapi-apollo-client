import React, { useState, useEffect, FormEvent } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { createUseStyles } from 'react-jss';

import { GET_HOMEWORLD_QUERY, GET_ALLHOMEWORLDS_QUERY } from '../graphql';
import QueryResultRenderer from './query-result-renderer';

const useStyles = createUseStyles(() => ({
  form: {
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
    if(person) {
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
      <form className={s.form} onSubmit={e => submitHandler(e)}>
        <div>
          <label>Name</label>
          <input type="text" name="name" ref={node => name = node as HTMLInputElement} /><br/>
        </div>
        <div>
          <label>Height</label>
          <input type="number" name="height" ref={node => height = node as HTMLInputElement}/>
        </div>
        <div>
          <label>Mass</label>
          <input type="number" name="mass" ref={node => mass = node as HTMLInputElement}/>
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" name="gender" ref={node => gender = node as HTMLSelectElement}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div>
          <label>Homeworld</label>
          <select id="homeworld" name="homeworld" ref={node => homeworld = node as HTMLSelectElement}>
            {data?.getAllHomeworlds.map((homeworld: any) => <option value={homeworld.id}>{homeworld.name}</option>)}
          </select>
        </div>
        <div>{errorMessage && <small>{errorMessage}</small>}</div>
        <input type="submit" value="Submit" />
      </form>
    </QueryResultRenderer>
  )
}

export default Form;