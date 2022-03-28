import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <Link className={styles.nav__home} to={`/ReactFlix`}>
          <i className='fa-brands fa-react fa-3x'></i>
          <strong>Flix</strong>
        </Link>
        <Link className={styles.nav__arrow} to={`/ReactFlix`}>
          <i className='fa-solid fa-arrow-left fa-2x'></i>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
