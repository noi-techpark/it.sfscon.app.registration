import {
  SET_LOCATIONS,
  SET_SCANNED_LOCATION,
  SET_PRINTING,
  RESET_PRINT_STATE,
  SET_SCANNING,
  UNSET_SCANNING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
  CLEAR_LOADING,
  SCAN_USER,
  STOP_PRINTING,
} from "../constants/AppConstants";
import errorHandler from "../../tools/errorHandler";
import { SET_TOAST_MESSAGE } from "../constants/UtilsConstants";
import api from "../../service/service";

export const setLocations =
  (locations = {}) =>
  (dispatch) => {
    dispatch({ type: SET_LOCATIONS, payload: locations });
  };

export const setScannedLocation =
  (location, closeCameraCb) => (dispatch, getState) => {
    try {
      const checkIfLocationExists = getState().app.locations[location];

      if (!checkIfLocationExists) {
        throw new Error('"Location does not exist"');
      }
      dispatch({ type: SET_SCANNED_LOCATION, payload: location });

      dispatch({
        type: SET_TOAST_MESSAGE,
        payload: { message: "Location succesfully scanned", type: "info" },
      });
    } catch (error) {
      dispatch({
        type: SET_TOAST_MESSAGE,
        payload: { message: error.message, type: "error" },
      });
    } finally {
      closeCameraCb();
    }
  };

export const scanUser = (scanUri, scannedId) => async (dispatch, getState) => {
  try {
    dispatch(setScanning());
    dispatch(setPrinting());
    dispatch({ type: SCAN_USER, payload: scannedId });

    const url = `${scanUri}${scannedId}`;
    await api.post(url, {});

    dispatch({
      type: SET_TOAST_MESSAGE,
      payload: { message: "User scanned successfully", type: "info" },
    });
  } catch (error) {
    const errMessage = errorHandler(error);
    const currentLocation = getState().app.currentLocation;
    dispatch({
      type: SET_TOAST_MESSAGE,
      payload: {
        message: !currentLocation ? "Please scan location first" : errMessage,
        type: "error",
      },
    });
  } finally {
    setTimeout(() => {
      dispatch(stopPrinting());
    }, 800);
  }
};

export const setScanning = () => (dispatch) => {
  dispatch({ type: SET_SCANNING });
};

export const unsetScanning = () => (dispatch) => {
  dispatch({ type: UNSET_SCANNING });
};

export const stopPrinting = () => (dispatch) => {
  dispatch({ type: STOP_PRINTING });
};

export const setPrinting = () => (dispatch) => {
  dispatch({ type: SET_PRINTING });
};
