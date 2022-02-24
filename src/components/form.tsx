import React, { useState, FormEvent } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { createUseStyles } from 'react-jss';

import PersonCard from './person-card';
import { PersonI } from '../@types';
import { CREATE_PERSON_MUTATION, GET_PEOPLE_QUERY } from '../graphql';
import useQueryParams from '../hooks/use-query-params';

const useStyles = createUseStyles(() => ({
  form: {

  }
}));

const Form = (props: any) => {
  const s = useStyles();
  const [errorMessage, setErrorMessage] = useState('');

  const query = useQueryParams();
  const pageNumber = query.get('page');

  let name: HTMLInputElement;
  let height: HTMLInputElement;
  let mass: HTMLInputElement;
  let gender: HTMLInputElement;
  let homeworld: HTMLInputElement;

  const [createPerson, { loading }] = useMutation(CREATE_PERSON_MUTATION);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if(!name.value || !name.value || !name.value ) {
      setErrorMessage('All fields are required!')
      return;
    }

    try {
      await createPerson({ variables: { 
        personData: {
          name: name.value,
          height: parseInt(height.value, 10),
          mass: parseInt(mass.value, 10),
          gender: gender.value,
          homeworldId: parseInt(homeworld.value, 10)
      }},
      refetchQueries: () => [{
        query: GET_PEOPLE_QUERY,
        variables: { page: pageNumber }
      }],
      });
      props.closeModal();
      
    } catch(err: any) {
        setErrorMessage(err.message)
    }
  }

  return (
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
        <input type="text" name="gender" ref={node => gender = node as HTMLInputElement}/>
      </div>
      <div>
        <label>Homeworld</label>
        <input type="number" name="homeworld" ref={node => homeworld = node as HTMLInputElement}/>
      </div>
      <div>{errorMessage && <small>{errorMessage}</small>}</div>
      <input type="submit" value={loading ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default Form;