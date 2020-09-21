import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "./Type";

export const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST,
  };
};

export const fetchEventsSuccess = (products) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: products,
  };
};

export const fetchEventsFailure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};
