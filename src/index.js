import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import SAMPLE_EVENTS from './data/events.json';

ReactDOM.render(<App events={SAMPLE_EVENTS}/>, document.getElementById('root'));
