import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.module.css';

export class Header extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          she-dev.com
        </section>
      </div>
    )
  }
}

export default Header;