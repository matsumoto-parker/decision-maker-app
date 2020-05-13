import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      backgroundColor: '#e84566',
      color: '#Fff',
      fontWeight: 600,
      marginLeft: 5,
      padding: 2,
    },
  })
);

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
      item === randomItem
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );

    setItems(newItems);
  };

  const classes = useStyles();

  return (
    <section className="section">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              className="input"
              type="text"
              placeholder="やることを追加しよう"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button className={classes.button} variant="contained">
              追加
            </Button>
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
        {items.length > 0 && (
          <Button
            onClick={randomize}
            className={classes.button}
            variant="contained"
            style={{ backgroundColor: '#239a90', marginBottom: '5px' }}
          >
            決定
          </Button>
        )}
      </div>
    </section>
  );
}

export default App;
