import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const className = classNames(
    'rcu-button',
    {
      [`is-${props.color}`]: props.color,
      [`is-${props.size}`]: props.size,
      'is-block': props.block
    }
  );

  const componentProps = {
    className,
    disabled: props.disabled,
    onClick: props.onClick,
    type: props.type
  }

  return (
    <button {...componentProps}>
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  children: '',
  color: 'default',
  size: 'normal'
};
Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
    'default',
    'danger',
    'success',
    'warning'
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'normal',
    'large'
  ]),
  type: PropTypes.string
};

export default Button
