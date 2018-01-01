import React, { Component } from 'react';
import HTMLReactParser from 'html-react-parser';
import './App.css';

class Element extends Component {
  render() {
    return (
      <div className="element">
        <div className="package">
          <a href = { 'https://unpkg.com/' + this.props.package + '/' } > { this.props.package } </a>
        </div>
        <div> &nbsp; </div>
        <table>
          <tr>
            <td className="childof"> <div className="tooltip"><span class="tooltiptext">{this.props._childof_comment}</span>{ this.props.childof}{ (this.props.childof) ? '.' : null } </div></td>
          </tr>
          <tr>
          <td className="datatype"> <div className="tooltip"><span class="tooltiptext">{this.props._datatype_comment}</span>{ this.props.datatype}</div></td>
            <td className="name"> <div className="tooltip"><span class="tooltiptext">{this.props._name_comment}</span>{ this.props.name} </div> </td>
          </tr>
        </table>
        <br/>
        <pre className="code">
           { this.props.code }
        </pre>
        <br/>
        <div className="note">
        <p><b>Note</b></p><p>{ HTMLReactParser(this.props.note) }</p>
        </div>
      </div>
    );
  }
}

export default Element;
