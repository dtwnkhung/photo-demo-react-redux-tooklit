import React, { Fragment } from "react";
import { Col, Row, Button } from "reactstrap";

function PhotoCard(props) {
    const { photo = {}, onEditPhoto, onRemovePhoto } = props;

    const handleEditPhoto = () => {
        if (onEditPhoto) onEditPhoto(photo)
    }
    const handleRemovePhoto = () => {
        if (onRemovePhoto) onRemovePhoto(photo)
    }
    return (
        <Fragment>
            <img
                src={photo.photo}
                className="img-fluid w-100"
                style={{
                    objectFit: "cover",
                    aspectRatio: 1,
                    borderRadius: 10
                }}
                alt={photo.title}
            />
            <h5 className="text-center mb-1 mt-2">{photo.title}</h5>
            <p className="text-center">Category: {photo.category}</p>
            <Row>
                <Col md={6}>
                    <Button
                        outline
                        color="primary"
                        className="w-100"
                        onClick={handleEditPhoto}
                    >
                        Edit
                    </Button>
                </Col>
                <Col md={6}>
                    <Button
                        color="danger"
                        className="w-100"
                        onClick={handleRemovePhoto}
                    >
                        Remove
                    </Button>
                </Col>
            </Row>
        </Fragment>
    );
}

export default PhotoCard;