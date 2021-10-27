import { useEffect, useState } from 'react';

const Quote = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await response.json();
      setState(data);
    };
    fetchQuote();
    setTimeout(fetchQuote, 8000);
  }, []);

  return (
    <div>
      <h2>{state.author}</h2>
      <div>{state.quote}</div>
    </div>
  );
};

export default Quote;
