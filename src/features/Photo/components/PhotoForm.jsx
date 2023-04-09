import React, { Fragment } from "react";
import { Button, Col, Container, FormGroup, Input, Label, Row, Spinner } from "reactstrap";
import Select from 'react-select';
import { PHOTO_CATEGORT_OPTIONS } from "../../../constants/Global";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import RandomPhotoField from "../../../components/RandomPhotoField";
import * as Yup from "yup";

function PhotoForm(props) {
    const { initialValues } = props;
    // const initialValues = initialValues

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        category: Yup.string().required('This field is required'),
        // photo: Yup.string().required('This field is required'),
        photo: Yup.string().when('category', {
            is: "education",
            then: () => Yup.string().required('This field is required'),
            otherwise: () => Yup.string().notRequired(),
        })
    })
    return (
        <Fragment>
            <section className="photo-form py-4">
                <Container>
                    <Row>
                        <Col xs={12} md={8} lg={6} className="mx-auto">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                // onSubmit={(values) => console.log('Submit values:', values)}
                                onSubmit={props.onSubmit}
                            >

                                {formikProps => {
                                    const { values, errors, touched, isSubmitting } = formikProps
                                    // console.log('%cPhotoForm.jsx line:17 object', 'color: #007acc;', { values, errors, touched });
                                    return (

                                        <Form>
                                            <FastField
                                                name="title"
                                                component={InputField}
                                                label="Title"
                                                type="text"
                                                placeholder="Ex: Landscape"
                                            />
                                            <FastField
                                                name="category"
                                                component={SelectField}
                                                label="Category"
                                                options={PHOTO_CATEGORT_OPTIONS}
                                                placeholder="Select category"
                                            />
                                            {/* <FormGroup>
                                                <Label for="categoryId">Category</Label>
                                                <Select
                                                    id="categoryId"
                                                    name="category"
                                                    isSearchable={true}
                                                    placeholder="Select category"
                                                    isClearable={true}
                                                    options={PHOTO_CATEGORT_OPTIONS}
                                                />
                                            </FormGroup> */}
                                            <FastField
                                                name="photo"
                                                component={RandomPhotoField}
                                                label="Photo"
                                            />
                                            {/* <FormGroup>
                                                <Label>Photo</Label>
                                                <div>
                                                    <Button color="outline-primary" className="mb-3">Random a photo</Button>
                                                    <div>
                                                        <img className="mb-3" width={200} height={200} style={{ objectFit: "cover", aspectRatio: 1, borderRadius: 8 }} src="https://images.unsplash.com/photo-1680676960765-f18115aa7390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                                                    </div>

                                                </div>
                                            </FormGroup> */}
                                            <Button
                                                type="submit"
                                                color="primary"
                                                className="d-flex align-items-center mb-3">
                                                {isSubmitting ?
                                                    <><Spinner size="sm" className="me-2" /></>
                                                    : <></>
                                                }
                                                Add to album
                                            </Button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default PhotoForm;