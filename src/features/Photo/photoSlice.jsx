import { createSlice } from "@reduxjs/toolkit";
const initialPhoto = [
    {
        id: 1,
        category: "education",
        photo: "https://picsum.photos/id/1/300/300",
        title: "Haha"
    },
    {
        id: 2,
        category: "mature",
        photo: "https://picsum.photos/id/2/300/300",
        title: "Haha"
    },
    {
        id: 3,
        category: "landscape",
        photo: "https://picsum.photos/id/3/300/300",
        title: "Haha"
    },
    {
        id: 4,
        category: "education",
        photo: "https://picsum.photos/id/4/300/300",
        title: "Haha"
    },
    {
        id: 5,
        category: "education",
        photo: "https://picsum.photos/id/5/300/300",
        title: "Haha"
    },
    {
        id: 6,
        category: "education",
        photo: "https://picsum.photos/id/6/300/300",
        title: "Haha"
    },
]
const photo = createSlice({
    name: "photos",
    initialState: initialPhoto,
    reducers: {
        addPhoto: (state, action) => {
            // const newPhoto = action.payload;
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload;
            return state.filter(photo => photo.id !== removePhotoId);
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }

        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;