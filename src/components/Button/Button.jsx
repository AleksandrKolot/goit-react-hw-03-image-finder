import { Component } from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';

class Button extends Component {
  render() {
    const { isOff, onClick } = this.props;
    return (
      <button
        disabled={isOff}
        className={s.Button}
        type="button"
        onClick={onClick}
      >
        {!isOff && 'Load more . . .'}
        <Spinner
          visible={isOff}
          type="ThreeDots"
          color="#FFF"
          height={20}
          width={70}
        />
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOff: PropTypes.bool.isRequired,
};

export default Button;
