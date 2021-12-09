import { 
    SET_TIME_FRAME_TO_DAILY, 
    SET_TIME_FRAME_TO_WEEKLY, 
    SET_TIME_FRAME_TO_MONTHLY } 
    from "./constants"

const initialState = {
    timeFrame: 'daily'
}

export const setTimeFrame = (state=initialState, action) => {
    switch(action.type){
        case SET_TIME_FRAME_TO_WEEKLY:
            return {...state, timeFrame: action.payload};
        case SET_TIME_FRAME_TO_MONTHLY:
            return {...state, timeFrame: action.payload};
        case SET_TIME_FRAME_TO_DAILY:
            return {...state, timeFrame: action.payload};
            default:
                return state;

    }
}
