import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Methods from './Methods';
import Parameters from './Parameters';
import Element from './Element';
import registerServiceWorker from './registerServiceWorker';

//Import the Reference-Data from JSON
//import element from './data/react.reference.json';
import element from './data/react.component.reference.json';
//import element from './data/react.children.reference.json';
//import element from './data/react.if.reference.json';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Parameters parameters={ element.parameters } />,
  document.getElementById('parametersBlock')
);

ReactDOM.render(
  <Element
    package = {element.package}
    name = {element.name}
    _name_comment = {element._name_comment}
    datatype = {element.datatype}
    _datatype_comment = {element._datatype_comment}
    childof = {element.childof}
    _childof_comment = {element._childof_comment}
    code = {element.code}
    note = {element.note}
  />,
  document.getElementById('elementHeader')
);

ReactDOM.render(
  <Methods methods={ element.methods } />,
  document.getElementById('methodsBlock')
);

registerServiceWorker();
