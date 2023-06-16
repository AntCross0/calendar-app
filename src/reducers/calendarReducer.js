import moment from "moment";
import { types } from "../types/types";



const initialState = {
    events: [{
        id: new Date().getTime(),
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


        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            }



        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };

        case types.eventClearActive:
            return {
                ...state,
                activeEvent: null
            };

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(e => (e.id === action.payload.id) ? action.payload : e)
            }


        default:
            return state;
    }
}