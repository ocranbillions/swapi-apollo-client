import React, { useState, useEffect, FormEvent } from 'react';
import { createUseStyles } from 'react-jss';

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
  let gender: HTMLInputElement;
  let homeworld: HTMLInputElement;



  useEffect(() => {
    const { person } = props;
    if(person) {
      name.value = person.name
      height.value = person.height
      mass.value = person.mass
      gender.value = person.gender
      homeworld.value = "1"
    }
  }, [props.person])

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if(!name.value || !name.value || !name.value ) {
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
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form;