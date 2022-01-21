import { useState, useEffect } from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    props.onChange(value)
    console.log(value)
  }, [value])

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  switch (props.type) {
    case 'text':
      return (
        <div className={classes.input__container}>
          <img src={props.icon} className={classes.input__icon} />
          <input
            className={classes.input}
            {...props}
            value={value}
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
            onChange={valueChangeHandler}
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
