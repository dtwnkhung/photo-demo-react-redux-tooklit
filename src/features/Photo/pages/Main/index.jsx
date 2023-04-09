import React, { Fragment } from "react";
import Banner from "../../../../components/Banner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import PhotoList from "../../../../components/PhotoList";
import { removePhoto } from "../../photoSlice";

function MainPage() {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('List of photo', photos);
    const handleEditPhoto = (photo) => {
        console.log(photo);
        navigate(`/photos/${photo.id}`)
    }
    const handleRemovePhoto = (photo) => {
        console.log(photo);
        const removePhotoId = photo.id;
        console.log(removePhotoId);
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    console.log('%cindex.jsx line:25 object', 'color: #007acc;', import.meta.env.VITE_REACT_API_URL);
    return (
        <Fragment>
            <Banner title="Photo Page" backgroundUrl="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="text-center">
                <Link to={"/photos/add"}>Go to add photo page</Link>
            </div>
            <PhotoList
                photoList={photos}
                onEditPhoto={handleEditPhoto}
                onRemovePhoto={handleRemovePhoto}
            />
            {/* <Container>
                <Row className="mt-3 mx-n2">
                    {photos && photos.map((photo, index) => (
                        <Col xs={12} md={6} lg={6} key={index} className="mb-3 px-2">
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
                                    <Button outline color="primary" className="w-100">Edit</Button>
                                </Col>
                                <Col md={6}>
                                    <Button color="danger" className="w-100">Remove</Button>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container> */}
        </Fragment>
    );
}

export default MainPage;