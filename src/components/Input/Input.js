import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
  const className = classNames(
    'rcu-input',
    {
      'is-block': props.block,
      'is-disabled': props.disabled,
      [`is-${props.color}`]: props.color,
      [`is-${props.size}`]: props.size
    }
  );

  const containerProps = {
    className
  }

  const componentProps = {
    disabled: props.disabled,
    onChange: props.onChange,
    type: props.type
  }

  if (props.hasOwnProperty('value')) {
    componentProps.value = props.value || ''
  }

  return (
    <div {...containerProps}>
      <input {...componentProps} />
    </div>
  );
}

Input.defaultProps = {};
Input.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning'
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'large'
  ])
};

export default Input
