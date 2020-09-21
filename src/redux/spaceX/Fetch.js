import axios from "axios";
import {
  fetchEventsFailure,
  fetchEventsSuccess,
  fetchEventsRequest,
} from "./Action";
// import SERVER_URL from '../../config';

const SERVER_URL = "https://api.spaceXdata.com/v3/launches?limit=100";

const fetchPosts = (address) => {
  return (dispatch) => {
    dispatch(fetchEventsRequest);
    axios
      .get(SERVER_URL + address)
      .then((response) => {
        const products = response.data;
        dispatch(fetchEventsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure(errorMsg));
      });
  };
};

export const fetchFilter = (fetchValues) => {
  let address = "";
  if (fetchValues.launch_success) {
    address += fetchValues.launch_success;
  }
  if (fetchValues.land_success) {
    address += fetchValues.land_success;
  }
  if (fetchValues.launch_year) {
    address += fetchValues.launch_year;
  }
  return (dispatch) => {
    dispatch(fetchEventsRequest);
    axios
      .get(SERVER_URL + address)
      .then((response) => {
        const products = response.data;
        dispatch(fetchEventsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure(errorMsg));
      });
  };
};

export default fetchPosts;
