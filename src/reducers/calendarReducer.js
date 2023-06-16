import moment from "moment";
import { types } from "../types/types";



const initialState = {
    events: [{
        title: 'Mi tarea #1',
        start: moment().toDate(),
        end: moment().add(1, 'hours').toDate(),
        user: {
            _id: 1234,
            name: 'Anthony'
        },
        bgcolor: 'blue',
        notes: 'algo'
    }],
    activeEvent: null
};


export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };


        default:
            return state;
    }
}