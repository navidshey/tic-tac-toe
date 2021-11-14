import React from "react";
import PropTypes from "prop-types";
import * as Styles from './../../styles/game'

const TextFieldGroup = ({
  id,
  name,
  placeholder,
  value,
  error,
  type,
  onChange,
  className,
  isLoading,
  disabled,
  info,
}) => {
  return (
    <>
      {!isLoading && (
        <>
          <label htmlFor={name}>{info}</label>
          <Styles.InputText
            id={id}
            type={type}
            className={className || ""}
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            autoComplete="off"
          />
        </>
      )}
      {error && (
        <label htmlFor={name}>
          <span className="required">{error}</span>
        </label>
      )}

      {isLoading && "submitting ..."}
    </>
  );
};

TextFieldGroup.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
