import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import './app.css';
import styles from './styles.module.css';


class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>
          <i className="fa fa-heart"></i>
          Environment: {__NODE_ENV__}
        </h1>
      </div>
    );
  }
}

export default App;