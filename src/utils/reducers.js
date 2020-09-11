import {
  ALERT_ERROR_SHORT_NAME,
  ALERT_ERROR_DUPE_NAME,
  ALERT_ERROR_UNEXPECTED,
  ALERT_SUCCESS,
  ALERT_WARNING_SAME_NAME,
  ALERT_MESSAGE,
  ALERT_SUCCESS_SEVERITY,
  ALERT_ERROR_SEVERITY,
  ALERT_WARNING_SEVERITY,
} from 'utils/constants';

export const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        isAlertOpen: true,
        alertMessage: ALERT_MESSAGE[action.type],
        alertSeverity: ALERT_SUCCESS_SEVERITY,
      };
    case ALERT_ERROR_SHORT_NAME:
      return {
        isAlertOpen: true,
        alertMessage: ALERT_MESSAGE[action.type],
        alertSeverity: ALERT_ERROR_SEVERITY,
      };
    case ALERT_ERROR_DUPE_NAME:
      return {
        isAlertOpen: true,
        alertMessage: ALERT_MESSAGE[action.type],
        alertSeverity: ALERT_ERROR_SEVERITY,
      };
    case ALERT_ERROR_UNEXPECTED:
      return {
        isAlertOpen: true,
        alertMessage: ALERT_MESSAGE[action.type],
        alertSeverity: ALERT_ERROR_SEVERITY,
      };
    case ALERT_WARNING_SAME_NAME:
      return {
        isAlertOpen: true,
        alertMessage: ALERT_MESSAGE[action.type],
        alertSeverity: ALERT_WARNING_SEVERITY,
      };
    default:
      return {
        ...state,
        isAlertOpen: false,
      };
  }
};
