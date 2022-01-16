import { useState } from 'react';
import classes from './Input.module.scss';

const Input = (props) => {

  const [value, setValue] = useState('')

  const valueChangeHandler = e => {
    setValue(e.target.value)
  }

  switch (props.type) {
    case 'text':
      return (
        <>
          <label for={props.id} className={classes.input__labelBefor}></label>
          <input className={classes.input} {...props} value={value} onChange={valueChangeHandler} />
        </>
      );
  }
};

export default Input;
