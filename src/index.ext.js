// import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import Vera from './component/Vera';

const PanelID = 'PORTAL_VERA_PANEL';
console.log('index.ext exe');
let panel = document.createElement('aside');
panel.id = PanelID;
document.body.appendChild(panel);
ReactDOM.render(<Vera />, document.getElementById(PanelID));
