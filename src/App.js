import React, { useState } from 'react';
import './App.css';

const defItems = [
  {
    text: 'option1',
    selected: false,
  },
  {
    text: 'option2',
    selected: false,
  },
  {
    text: 'option3',
    selected: false,
  },
  {
    text: 'option4',
    selected: false,
  },
  {
    text: 'option5',
    selected: false,
  },
];

function App() {
  const [items, setItems] = useState(defItems);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      text: inputValue,
      selected: false,
    };
    const newItems = [...items, newItem];

    setInputValue('');
    setItems(newItems);
  };

  const randomize = () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(pickRandomItem, 100 * i);
    }
  };

  const pickRandomItem = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];

    const newItems = items.map((item) =>
      item === randomItem ? { ...item, selected: true } : item
    );

    setItems(newItems);
  };

  return (
    <section className="section">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="text"
              placeholder="やることを追加しよう"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button>追加</button>
          </div>
        </form>
        <ul className="item-container">
          {items.map((item, index) => (
            <li
              className={`list-item ${item.selected ? 'decision' : ''}`}
              key={index}
            >
              {item.text}
            </li>
          ))}
        </ul>
        {items.length > 0 && <button onClick={randomize}>決定</button>}
      </div>
    </section>
  );
}

export default App;
