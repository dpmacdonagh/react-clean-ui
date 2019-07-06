import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Select = (props) => {
  const className = classNames(
    'rcu-select',
    {
      'is-block': props.block,
      [`is-${props.color}`]: props.color,
      [`is-${props.size}`]: props.size
    }
  );

  const containerProps = {
    className
  }

  const selectProps = {
    onChange: props.onChange
  }

  return (
    <div {...containerProps}>
      <select {...selectProps}>
        {props.children}
      </select>
    </div>
  );
}

Select.defaultProps = {
  color: 'default'
};
Select.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'default',
    'danger',
    'success',
    'warning'
  ]),
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'large'
  ])
};

export default Select;
