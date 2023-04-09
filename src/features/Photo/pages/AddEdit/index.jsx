
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { randomNumber } from "../../../../utils/common"

function AddEditPhoto() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { photoId } = useParams();
    // console.log(photoId);
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => state.photos.find(x => x.id === Number(photoId)))

    const initialValues = isAddMode ? {
        title: '',
        category: null,
        photo: '',
    } : editedPhoto
    const handleSubmit = (values) => {
        return new Promise((resolve, reject) => {
            console.log('Form submit', values);

            setTimeout(() => {

                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                navigate("/");
                resolve(true);

            }, 2000)
        })
    }
    return (

        <Fragment>
            <Banner title="Add/Edit Photo" backgroundUrl="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" />
            <PhotoForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </Fragment>
    );
}

export default AddEditPhoto;