import { useState } from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  const [bill, setBill] = useState('');

  const valueChangeHandler = (e) => {
    setBill(e.target.value);
  };

  switch (props.type) {
    case 'text':
      return (
        <div className={classes.input__container}>
          <img src={props.icon} className={classes.input__icon} />
          <input
            className={classes.input}
            {...props}
            value={bill}
            onChange={valueChangeHandler}
          />
        </div>
      );
    case 'radio':
      return (
        <div className={classes.radio__container}>
          <input
            id={`id${props.id}`}
            value={props.value}
            type={props.type}
            name={props.name}
            className={classes.radio__input}
            onChange={(e) => console.log(e.target.value)}
          />
          <label
            htmlFor={`id${props.id}`}
            className={classes.radio__label}
          >
            {props.value}%
          </label>
        </div>
      );
  }
};

export default Input;
