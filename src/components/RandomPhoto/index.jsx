import React, { Fragment } from "react";
import { FormGroup, Label, Button } from "reactstrap";

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }
    return (
        <Fragment>
            <FormGroup>
                <div>
                    <Button
                        color="outline-primary"
                        className="mb-3"
                        onBlur={onRandomButtonBlur}
                        onClick={handleRandomPhotoClick}
                    >
                        Random a photo
                    </Button>
                    <div style={{ width: 300, height: 300, backgroundColor: "#d9d9d9", borderRadius: 8, }}>
                        {imageUrl && <img
                            width={300}
                            height={300}
                            style={{
                                objectFit: "cover",
                                aspectRatio: 1,
                                borderRadius: 8,
                                backgroundColor: "#d9d9d9"
                            }}
                            src={imageUrl}
                            // onError={(e) => e.target.src = getRandomImageUrl()}
                            onError={handleRandomPhotoClick}
                        />
                        }
                    </div>
                </div>
            </FormGroup>
        </Fragment>
    );
}

export default RandomPhoto;