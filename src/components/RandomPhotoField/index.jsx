import React, { Fragment } from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "../RandomPhoto";
import { ErrorMessage } from "formik";

function RandomPhotoField(props) {
    const { field, form, label } = props
    const { name, value, onBlur } = field;

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <Fragment>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <RandomPhoto
                    name={name}
                    imageUrl={value}
                    onImageUrlChange={handleImageUrlChange}
                    onRandomButtonBlur={onBlur}
                />
                <div className={showError ? "is-invalid" : ''}></div>
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </Fragment>
    );
}

export default RandomPhotoField;