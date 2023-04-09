import React, { Fragment } from "react";
import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
    const { field, form,
        type, label, placeholder, disabled = false } = props;
    // const { name, value, onChange, onBlur } = field
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <Fragment>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Input
                    id={name}
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    invalid={showError}
                />
                {/* {showError && <p className="text-danger">{errors[name]}</p>} */}
                {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </Fragment>
    );
}

export default InputField;