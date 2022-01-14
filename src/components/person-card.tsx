import React from 'react'
import { Link } from "react-router-dom";


const PersonCard = (props: any) => {
  const { person } = props;
  return (
    <Link to={`/person?name=${person.name}`}>
      <div>{person.name}</div>
    </Link>
  )
}

export default PersonCard;