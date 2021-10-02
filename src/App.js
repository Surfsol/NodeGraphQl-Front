import React, { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const QUERY = gql`
    query getWeighted($queryTraders: newWeightedInput) {
      weightedData(input: $queryTraders) {
        data_id
        created_date
        data_key
        weight
      }
    }
  `;
  const thisQuery = { data_key: 'commoditycountry' };

  let { loading, data } = useQuery(QUERY, {
    variables: { queryTraders: thisQuery },
  });

  console.log({ loading, data });

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
