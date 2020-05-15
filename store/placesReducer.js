import { ADD_PLACE } from "./placesActions";
import Place from '../models/place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                new Date().toString(),
                action.payload.title,
                action.payload.image
            );
            return {
                places: state.places.concat(newPlace)
            }
        default:
            return state;
    }
}