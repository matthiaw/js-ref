import React from 'react';
import HTMLReactParser from 'html-react-parser';
import './App.css';
import Parameters from './Parameters';

class Methods extends React.Component {
  render() {
    return (
      <div className="methods">
        <h3>Methods</h3>
        {this.props.methods.map(method => (

          <ul>
            <h4> {method.name} { (method.status==='required') ? <span className="status-red">Required</span> : null } { (method.status==='optional') ? <span className="status-gray">Optional</span> : null } </h4>
            <li key={method} >
              <pre className="code">{method.statement}</pre>
              <div>{HTMLReactParser(method.description)}</div>
              {(method.code_example) ?
                <pre className="code">{method.code_example}</pre> : null
              }
              {(method.note) ?
                <div className="note">
                  <p><b>Note</b></p><p>{ HTMLReactParser(method.note) }</p>
                </div> : null
              }
            </li>

          {(method.parameters)?
          <li> <Parameters parameters={ method.parameters } type="methodsBlock" /></li>:null}

          </ul>
        ))}
      </div>
    );
  }
}

export default Methods;
