import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: 20}}>

      <nav style={{ padding: 15}}>
        <a href='/stocks'>Stocks</a>
        <a href='/watchlists'>Watchlist</a>
      </nav>
        <h1>Stock Market Portfolio</h1>
        <h4>Stocks</h4>
        <ul>
          <li>
            <span>BMW (300) - </span>
             <strong>$40.08</strong>
             <button>Add to My Wachlist</button>
          </li>
          <li>
            <span>BMW (300) - </span>
             <strong>$40.08</strong>
             <button>Add to My Wachlist</button>
          </li>
        </ul>
    </div>

  
  );


};

export default App;
