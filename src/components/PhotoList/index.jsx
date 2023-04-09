import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PhotoCard from "../PhotoCard";

function PhotoList(props) {
    const { photoList = [], onEditPhoto, onRemovePhoto } = props;
    return (
        <>
            <Container>
                <Row className="mt-3 mx-n2">
                    {photoList && photoList.map((photo, index) => (
                        <Col xs={12} md={6} lg={6} key={index} className="mb-3 px-2">
                            <PhotoCard
                                key={index}
                                photo={photo}
                                onEditPhoto={onEditPhoto}
                                onRemovePhoto={onRemovePhoto}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default PhotoList;