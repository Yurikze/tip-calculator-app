import logo from '../../images/logo.svg';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Site logo" className={classes.header__logo} />
    </header>
  );
};

export default Header;
