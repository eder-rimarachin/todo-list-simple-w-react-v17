import React from 'react';
// import { createRoot } from 'react-dom/client'; For React v18.x
import { App } from './App';


// For React v18.x
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
// // ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(<div>Hola Mundo</div>, document.getElementById('root'));

