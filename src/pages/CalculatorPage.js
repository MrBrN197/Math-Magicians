import Calculator from '../components/Calculator';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '5rem',
};

const CalculatorPage = () => (
  <div style={style}>
    <h2>Lets&apos;s Do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
