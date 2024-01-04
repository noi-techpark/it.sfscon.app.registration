import {
  SET_SCANNING,
  UNSET_SCANNING,
  SCAN_USER,
  SET_LOCATIONS,
  SET_SCANNED_LOCATION,
  SET_PRINTING,
  STOP_PRINTING,
} from "../constants/AppConstants";

const initialState = {
  language: "en",
  theme: "light",
  loading: false,
  currentLocation: null,
  currentlyScannedUser: null,
  currentlyScannedUserTime: null,
  locations: {},
  scanned: false,
  printing: false,
};

export default AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      let allLocations = Object.assign({}, state.locations);
      allLocations = action.payload;
      return {
        ...state,
        locations: allLocations,
      };

    case SET_SCANNED_LOCATION:
      const currentLocation = state?.locations[action.payload];
      currentLocation["id"] = action.payload;

      return {
        ...state,
        currentLocation,
      };

    case SCAN_USER:
      return {
        ...state,
        currentlyScannedUser: action.payload,
        currentlyScannedUserTime: new Date(),
      };

    case SET_SCANNING:
      return {
        ...state,
        scanned: true,
      };

    case UNSET_SCANNING:
      return {
        ...state,
        scanned: false,
      };

    case SET_PRINTING:
      return {
        ...state,
        printing: true,
      };

    case STOP_PRINTING:
      return {
        ...state,
        printing: false,
      };
    default:
      return state;
  }
};
