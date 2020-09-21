import {FETCH_EVENTS_REQUEST,FETCH_EVENTS_SUCCESS,FETCH_EVENTS_FAILURE} from './Type'; 

const initialState = {
    loading:false,
    eventsList: [],
    error:'',
}

const SpacexReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_EVENTS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                eventsList:action.payload,
            } 

        case FETCH_EVENTS_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            
        
       default: return state          

    }
}

export default SpacexReducer;