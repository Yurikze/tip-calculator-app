import Input from '../Input/Input';
import Select from '../Select/Select';
import classes from './Main.module.scss';

const Main = () => {
  return (
    <main className={classes.main}>
      <section className={classes.calc}>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Bill</h3>
          <Input type="text" id="total" />
        </div>
        <div className={classes.calc__container}>
          <h3 className={classes.main__headline}>Select Tip %</h3>
          <Select />
        </div>
      </section>
      <section className={classes.total}>12</section>
    </main>
  );
};

export default Main;
