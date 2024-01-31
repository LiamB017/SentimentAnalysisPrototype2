import React, { useState, useEffect } from "react";

function App() {

   const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/sentiment").then(
     res => res.json()
      ).then((
        data) => {
          setData(data);
          console.log(data);
        }
      )
  }, []);

    return (
      <div>
        <h1> Sentiment Analysis </h1>
        <h2> Compund score is {data.vs} </h2>
        <h2> Sentiment is {data.sentiment} </h2>
      </div>
    );
}

export default App;
