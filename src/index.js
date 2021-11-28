import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './profile.css';
import './index.css';


import SAMPLE_EVENTS from './data/events.json';
import FILTERS from './data/filters.json';
import FRIENDS from './data/friends.json';

ReactDOM.render(<App events={SAMPLE_EVENTS} filters={FILTERS} friends={FRIENDS} />, document.getElementById('root'));
