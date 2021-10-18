import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'calculator' };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Calculator;
