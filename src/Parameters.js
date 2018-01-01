import React from 'react';
import HTMLReactParser from 'html-react-parser';
import './App.css';

class Parameters extends React.Component {
  render() {
    return (
      <div className="parameters">
      { (this.props.type==='methodsBlock') ? <b>Parameters</b>: <h3>Parameters</h3>}
        {this.props.parameters.map(parameter => (
          <ul>
            <li key={parameter} >
              <b>{parameter.name}</b>: {HTMLReactParser(parameter.description)}
              {(parameter.code_example) ?
                <pre className="code">{parameter.code_example}</pre> : null
              }
              {(parameter.note) ?
                <div className="note">
                  <p><b>Note</b></p><p>{ HTMLReactParser(parameter.note) }</p>
                </div> : null
              }
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Parameters;
