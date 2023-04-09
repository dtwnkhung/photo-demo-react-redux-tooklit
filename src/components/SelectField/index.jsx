import { ErrorMessage } from "formik";
import React, { Fragment } from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function SelectField(props) {
    const { field, form,
        label, placeholder, isSearchable = true, isDisabled = false, isClearable = true, options = [] } = props;
    // const { name, value, onChange, onBlur } = field
    const { name, value } = field;
    const selectedOptions = options.find(option => option.value === value);
    const handleSelectOptionChange = (selectedOptions) => {
        const selectedValue = selectedOptions ? selectedOptions.value : selectedOptions
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <Fragment>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Select
                    id={name}
                    {...field}
                    value={selectedOptions}
                    onChange={handleSelectOptionChange}
                    isSearchable={isSearchable}
                    placeholder={placeholder}
                    isClearable={isClearable}
                    isDisabled={isDisabled}
                    options={options}
                    className={showError ? 'is-invalid' : ''}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </Fragment>
    );
}

export default SelectField;