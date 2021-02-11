import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import data from 'data/data'

const StudyCases = () => {
  const { cases } = useParams();
  const [currentCase, setCurrentCase] = useState(undefined);

  useEffect(() => {
    const foundCase = data.find((item) => item.slug === cases);
    setCurrentCase(foundCase);
  }, [cases])

  return (
    <div>
      {!currentCase && <h2>Pas de case</h2>}
      {currentCase && (<h2>{currentCase.description}</h2>)}
    </div>
  );
};

export default StudyCases;