import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Calculator from 'app/components/Calculator';

export default class Home extends Component {
  static displayName = 'Home'

  render() {
    return (
      <div className="Page Page-home">
        <Helmet title="Calculator" />
        <Calculator />
      </div>
    );
  }
}
