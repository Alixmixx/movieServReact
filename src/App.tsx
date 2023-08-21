import { useState, useEffect, ChangeEvent } from "react";
import styles from "./App.module.css";

interface Coin {
  name: string;
  symbol: string;
  id: string;
  quotes: {
    USD: {
      price: string;
    };
  };
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [amount, setAmount] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAmount(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => setCoins(json))
    );
    setLoading(false);
  }, []);

  const bitcoinPrice = coins.find(coin => coin.symbol === 'BTC')?.quotes.USD.price
  return (
    <div>
      <h1 className={styles.title}>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            onChange={onChange}
            value={amount}
            type="number"
            placeholder="Enter dollars"
          />
          <strong>  Bitcoin value: {Number(amount) / Number(bitcoinPrice)}</strong>
        </div>
      )}
      <ul>
        {coins.map((coin: Coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) :{" "}
            {Math.floor(Number(coin.quotes.USD.price))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
