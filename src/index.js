import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Twitter from './Twitter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Twitter />,
	 document.getElementById('root')
);
registerServiceWorker();
