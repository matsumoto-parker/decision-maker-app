import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  setTimeout(() => {
    setItems(['test item1', 'test item2']);
  }, 1000);

  return (
    <section className="section">
      <div className="box">
        <div>
          <input
            className="input"
            type="text"
            placeholder="やることを追加しよう"
          />
          <button>追加</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li className="list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {items.length > 0 && <button>決定</button>}
      </div>
    </section>
  );
}

export default App;
