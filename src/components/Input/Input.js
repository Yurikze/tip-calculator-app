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
        <>
          <label
            htmlFor={props.id}
            className={classes.input__labelBefor}
          ></label>
          <input
            className={classes.input}
            {...props}
            value={bill}
            onChange={valueChangeHandler}
          />
        </>
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
