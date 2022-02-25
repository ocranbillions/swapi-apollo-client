import React, { useState, useEffect, FormEvent } from 'react';
import { createUseStyles } from 'react-jss';

import { CustomThemeI } from '../../@types';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  inputItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    marginBottom: 3,
  },
  input: {
    borderRadius: 5,
    color: theme.colors.white,
    border: 0,
    height: 23,
    paddingLeft: 5,
    fontSize: 12,
    background: theme.colors.lightBlack
  },
  errorText: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 20,
    color: 'red'
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& input[type="submit"]': {
      width: 100,
      background: theme.colors.darkBlack,
      color: theme.colors.white,
      border: 0,
      padding: '5px 10px',
      borderRadius: 5,
    }
  }
}));

const Form = (props: any) => {
  const s = useStyles();
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    name: '',
    height: '',
    mass: '',
    gender: '',
    homeworld: '',
  });

  const { homeworlds } = props;

  useEffect(() => {
    const { person } = props;
    if (person) setValues({...person, homeworld: person.homeworld.id})
  }, [props.person])

  const handleInputChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const { name, height, mass, gender, homeworld } = values;
    if(!name || !height || !mass || !gender || !homeworld) {
      setErrorMessage('All fields are required!')
      return;
    }

    const RADIX = 10;
    try {
      props.person ? (
          await props.updatePerson({
          name,
          height: parseInt(height, RADIX),
          mass: parseInt(mass, RADIX),
          gender,
          homeworldId: parseInt(homeworld, RADIX)
        })
      ) : (
        await props.createPerson({
          name,
          height: parseInt(height, RADIX),
          mass: parseInt(mass, RADIX),
          gender,
          homeworldId: parseInt(homeworld, RADIX)
        })
      )
      
      props.closeModal();
    } catch(err: any) {
      setErrorMessage(err.message)
    }
  }

  return (
    <form onSubmit={e => submitHandler(e)}>
      <div className={s.inputItem}>
        <label className={s.label}>Name</label>
        <input className={s.input} type="text" name="name" value={values.name} onChange={handleInputChange}/>
      </div>
      <div className={s.inputItem}>
        <label className={s.label}>Height</label>
        <input className={s.input} type="number" min="1" name="height" value={values.height} onChange={handleInputChange}/>
      </div>
      <div className={s.inputItem}>
        <label className={s.label}>Mass</label>
        <input className={s.input} type="number" min="1" name="mass" value={values.mass} onChange={handleInputChange}/>
      </div>
      <div className={s.inputItem}>
        <label className={s.label}>Gender</label>
        <select className={s.input} id="gender" name="gender" value={values.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="alien">Alien</option>
        </select>
      </div>
      <div className={s.inputItem}>
        <label className={s.label}>Homeworld</label>
        <select className={s.input} id="homeworld" name="homeworld" value={values.homeworld} onChange={handleInputChange}>
          <option value="">Select</option>
          {homeworlds?.getAllHomeworlds.map((homeworld: any) => <option key={homeworld.id} value={homeworld.id}>{homeworld.name}</option>)}
        </select>
      </div>
      <div className={s.errorText}>{errorMessage && <small>{errorMessage}</small>}</div>
      <div className={s.btnContainer}>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default Form;