import React from 'react';
import { useState } from 'react';
import './App.css'

const names = [
  'CodaBlack',
  'setapat',
  'Goodie',
  'Nonso',
  'NetNinja',
  'Roothub',
  'Ijeoma',
  'Ebedamoweh',
  'Jude',
  'Oriko',
  'Felicity',
  'Confidence',
  'Ruth',
  'PrinceNonso'
];

function SearchPage(){
  const [searchQuery, setSearchQuery] = useState('');
  const namesFiltered = names.filter(name =>
    name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) );
return(
<div>
  <h1>Search here</h1>
  <form action="">
      <input className="Input" type="text" placeholder='Search...' value={searchQuery} onChange={event=> setSearchQuery(event.target.value)}
      />
  </form>
  <ul>
    {namesFiltered.map(name => (
      <li key={name}>{name}</li>
    ))}
  </ul>
</div>
);
}


export default SearchPage;
