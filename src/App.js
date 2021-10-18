import react from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.updateDetails = this.updateDetails.bind(this);
  }

  updateDetails(e) {
    const newObj = calculate(this.state, e.target.textContent);
    this.setState(newObj);
  }

  render() {
    return (
      <Calculator
        updateDetails={this.updateDetails}
        value={this.state.next || this.state.total}
      />
    );
  }
}

export default App;
