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

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue !== '') {
      const newItem = {
        text: inputValue,
        selected: false,
      };
      const newItems = [...items, newItem];

      setInputValue('');
      setItems(newItems);
    }
  };

  const randomize = () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(pickRandomItem, 100 * i);
    }
  };

  // 10秒待ってから決定する処理
  // const wait = (sec) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, sec * 1000);
  //   });
  // };

  // const randomize = async () => {
  //   try {
  //     await wait(10);
  //     pickRandomItem();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const pickRandomItem = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];

    const newItems = items.map((item) =>
      item === randomItem
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );

    setItems(newItems);
  };

  const removeItem = (i) => {
    const newItems = items.filter((item, index) => index !== i);

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
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleSubmit}
            >
              追加
            </Button>
          </div>
        </form>
        <ul className="item-container">
          {items.map((item, index) => (
            <li
              className={`list-item ${item.selected ? 'decision' : ''}`}
              onDoubleClick={() => removeItem(index)}
              key={index}
            >
              {item.text}
            </li>
          ))}
        </ul>

        {items.length > 0 && (
          <>
            <Button
              onClick={randomize}
              className={classes.button}
              variant="contained"
              style={{ backgroundColor: '#239a90', marginBottom: '5px' }}
            >
              決定
            </Button>
            <small>*ダブルクリックで選択肢を減らせます</small>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
