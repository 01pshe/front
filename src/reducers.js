import {
  SPINNER_SHOW, SPINNER_HIDE,
  BACKGROUND_SHOW, BACKGROUND_HIDE,
  DIALOG_SHOW, DIALOG_HIDE,
  MODAL_SHOW, MODAL_HIDE
} from "./actions";

export const initialState = {
  spinner: 0,
  spinnerMessage: "",
  spinnerTimestamp: null,

  spinners: {},
  background: false,
  modal: 0,
  dialogs: []
};

const spinnerInitialState = {
  counter: 0,
  message: "",
  timestamp: null
};

function appReducer( state = initialState, action ) {
  switch ( action.type ) {
    case SPINNER_SHOW: {
      const counter = state.spinners[ action.id ] && state.spinners[ action.id ].counter || 0;
      const timestamp = state.spinners[ action.id ] && state.spinners[ action.id ].timestamp || null;
      return {
        ...state,
        spinners: {
          ...state.spinners,
          [ action.id ]: {
            ...state.spinners[ action.id ] || spinnerInitialState,
            counter: counter + 1,
            message: action.message,
            timestamp: timestamp || new Date().getTime()
          }
        }
      };
    }

    case SPINNER_HIDE: {
      const counter = state.spinners[ action.id ] && state.spinners[ action.id ].counter || 0;
      const timestamp = state.spinners[ action.id ] && state.spinners[ action.id ].timestamp || null;
      return {
        ...state,
        spinners: {
          ...state.spinners,
          [ action.id ]: {
            ...state.spinners[ action.id ] || spinnerInitialState,
            counter: action.force || counter <= 1 ? 0 : counter - 1,
            timestamp: action.force || counter <= 1 ? null : timestamp
          }
        }
      };
    }

    case BACKGROUND_SHOW:
      return {
        ...state,
        background: true
      };

    case BACKGROUND_HIDE:
      return {
        ...state,
        background: false
      };

    case MODAL_SHOW:
      return {
        ...state,
        modal: state.modal + 1
      };

    case MODAL_HIDE:
      return {
        ...state,
        modal: state.modal - 1
      };

    case DIALOG_SHOW:
      return {
        ...state,
        dialogs: [ ...state.dialogs, action.payload ]
      };

    case DIALOG_HIDE: {
      const dialogs = [ ...state.dialogs ];
      dialogs.splice( action.index, 1 );

      return {
        ...state,
        dialogs
      };
    }

    default:
      return { ...state };
  }
}

export default appReducer;
