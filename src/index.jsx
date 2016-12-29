import React from 'react';
import {render} from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDnBRV9qfidq5h0sxguCYeOZTKVzIus2YY';
const App = () => (
    <div>
        <SearchBar />
    </div>
);

render(
    <App />,
    document.getElementById('app')
);
