import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./../../styles/game";

/**A custom component Input element and be used as Input or submit and other type of inputs
 * 
 * @param id - Id of input
 * @param name - name of input
 * @param placeholder - placeholder of input
 * @param value - value to show in the input 
 * @param error - error message when input is invalid
 * @param type - type of input like 'text', 'submit', default value is Text
 * @param onChange - onChange callback when input has change
 * @param className -  custom className to be added to input
 * @param isLoading - a boolean value to show loading while is true
 * @param disabled - a boolean value which disable input on true
 * @param info - info message for the input
 * @returns Input Element
 */
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
