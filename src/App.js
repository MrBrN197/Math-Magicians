import react from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.updateDetails = this.updateDetails.bind(this);
  }

  updateDetails(e) {
    const newObj = calculate(this.state, e.target.textContent);
    this.setState(newObj);
  }

  render() {
    const { next, operation, total } = this.state;
    let result = '';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = `${next} ${operation || ''}`;
    }

    return (
      <Calculator
        updateDetails={this.updateDetails}
        value={result}
      />
    );
  }
}

export default App;
