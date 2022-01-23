
import Input from '../Input/Input';
import classes from './Main.module.scss';
import dollar from '../../images/icon-dollar.svg';
import man from '../../images/icon-person.svg';
import { useEffect, useState } from 'react';

const Main = () => {
  const tipAmoutList = [5, 10, 15, 25, 50];

  const [total, setTotal] = useState(null)
  const [tips, setTips] = useState(null)
  const [guests, setGuests] = useState(1)

  const [totalPerGuest, setTotalPerGuest ] = useState(0)
  const [tipsPerGuest, setTipsPerGuest] = useState(0)

  const handleTotalChange = val => {
    setTotal(val)
  }

  const handleTipChange = (val) => {
    setTips(val)
  }

  const handleGuestChange = (val) => {
    setGuests(val)
  }

  useEffect(() => {
    if (guests && total) {
      setTotalPerGuest(total / guests)
      setTipsPerGuest(total * tips / guests / 100)
    }
  }, [total, tips, guests])

  return (
    <main className={classes.main}>
      <section className={classes.calc}>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Bill</h3>
          <Input type="text" id="total" icon={dollar} onChange={handleTotalChange} value={total} />
        </div>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Select Tip %</h3>
          <div className={classes.calc__radio}>
            {tipAmoutList.map((tip, i) => (
              <Input
                type="radio"
                id={i}
                key={i}
                value={tip}
                name="tip_amount"
                onChange={handleTipChange}
              />
            ))}
          </div>
        </div>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Number of People</h3>
          <Input type="text" id="personCount" icon={man} onChange={handleGuestChange} value={guests} />
        </div>
      </section>
      <section className={classes.total}>
        <div className={classes.total__nums}>
          <div className={classes.total__container}>
            <h3
              className={`${classes.main__headline} ${classes.main__headline_color_invert} ${classes.total__heading}`}
            >
              Tip Amount
            </h3>
            <span className={classes.total__subtitle}>/ person</span>
            <p className={classes.total__sum}>${tipsPerGuest}</p>
          </div>
          <div className={classes.total__container}>
            <h3
              className={`${classes.main__headline} ${classes.main__headline_color_invert} ${classes.total__heading}`}
            >
              Total
            </h3>
            <span className={classes.total__subtitle}>/ person</span>
            <p className={classes.total__sum}>${totalPerGuest}</p>
          </div>
        </div>
        <button className={classes.total__reset}>Reset</button>
      </section>
    </main>
  );
};

export default Main;
