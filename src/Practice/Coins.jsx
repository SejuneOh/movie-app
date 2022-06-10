import { useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [conis, setCoins] = useState([]);


  // useEffect
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => {
        return res.json();
      }).then(result => {
        setCoins(result);
        setIsLoading(false);
      });
  }, [])

  console.log("coins", conis);

  // jsx
  return (
    <div className="App">
      <h2>The Coins!! ({conis.length})</h2>
      {isLoading ? (<strong>Loading...</strong>) : null}
      <hr />
      {conis.map(coin => (<li key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</li>))}
    </div>
  )
}

export default App
