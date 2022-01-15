import React from 'react';

const PersonDetails = (props: any) => {
  const { data } = props;
  const person = data.getPerson;

  return (
    <div>
      person Details component
      {person && <div>{person?.name}</div>}
    </div>
  )
}

export default PersonDetails;