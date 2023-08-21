import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);
  const irunonlyonce = () => {
    console.log("run only once");
  };
  useEffect(irunonlyonce, []);
  useEffect(() => {
      console.log("Searching for " + keyword);
  }, [keyword]);
  useEffect(() => {
      console.log("Counter is " + counter);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
