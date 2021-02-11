import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import data from 'data/data'

const CasesNavBar = () => {
  const [value, setValue] = useState(false)
  const handleDisplay = () => {
    value === false ? setValue(true) : setValue(false);
  };
  console.log(value)
  return (
    <div className='casesNavBar'>
      {value && <button onClick={handleDisplay}>Liste</button>}
      {!value && <button onClick={handleDisplay}>Card</button>}
      
      {!value &&
        <ul className='list'>
          {data.map((data) => (
            <li key={uuid()}><Link to={`/works/${data.slug}`}>{data.name}</Link></li>
          ))}
        </ul>}
      {value &&
        <ul className='cardList'>
          {data.map((data) => (
            <Link key={uuid()} to={`/works/${data.slug}`}>
              <li>
                <div className="card" >
                  <h2 className="card-title">{data.title}</h2>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      }
    </div>

  );
};

export default CasesNavBar;