import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import './profile.css';


import SAMPLE_EVENTS from './data/events.json';
import FILTERS from './data/filters.json';
import FRIENDS from './data/friends.json';

ReactDOM.render(<App events={SAMPLE_EVENTS} filters={FILTERS} friends={FRIENDS} />, document.getElementById('root'));
