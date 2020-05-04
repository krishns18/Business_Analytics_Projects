import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import GA from './utils/analytics';

// CSS Imports
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/responsive.css';
//import './css/color-3.css';

ReactDOM.render(<BrowserRouter>{ GA.init() && <GA.RouteTracker /> }<App/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
