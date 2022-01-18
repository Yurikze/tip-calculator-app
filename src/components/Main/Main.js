import Input from '../Input/Input';
import classes from './Main.module.scss';
import dollar from '../../images/icon-dollar.svg';
import man from '../../images/icon-person.svg';

const Main = () => {
  const tipAmoutList = [5, 10, 15, 25, 50];

  return (
    <main className={classes.main}>
      <section className={classes.calc}>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Bill</h3>
          <Input type="text" id="total" icon={dollar} />
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
              />
            ))}
          </div>
        </div>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Number of People</h3>
          <Input type="text" id="total" icon={man} />
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
            <p className={classes.total__sum}>$4.27</p>
          </div>
          <div className={classes.total__container}>
            <h3
              className={`${classes.main__headline} ${classes.main__headline_color_invert} ${classes.total__heading}`}
            >
              Total
            </h3>
            <span className={classes.total__subtitle}>/ person</span>
            <p className={classes.total__sum}>$32.27</p>
          </div>
        </div>
        <button className={classes.total__reset}>Reset</button>
      </section>
    </main>
  );
};

export default Main;
