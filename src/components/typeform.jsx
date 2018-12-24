import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';

class Typeform extends Component {
  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, 'https://ssuf.typeform.com/to/BngMG4', {
        opacity: 0,
        hideHeaders: true,
        hideFooter: true,
      });
    }
  }

  render() {
    return <div ref={el => (this.el = el)} style={{ width: '100%', height: '650px'}} />;
  }
}

export default Typeform;