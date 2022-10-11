import axios from 'axios';
import { IntlShape } from 'react-intl';
import { toast } from 'react-toastify';

function logOut() {
  localStorage.clear();
  window.location.reload();
}

function errorHandler(error: unknown, intl: IntlShape) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // ************** got the response from server
      switch (error.response.status) {
        case 0: {
          toast.error(intl.formatMessage({ id: 'error_0' }));
          break;
        }
        case 400: {
          toast.error(intl.formatMessage({ id: 'error_400' }));
          break;
        }
        case 401: {
          logOut();
          toast.error(intl.formatMessage({ id: 'error_401' }));
          break;
        }
        case 403: {
          logOut();
          toast.error(intl.formatMessage({ id: 'error_403' }));
          break;
        }
        case 404: {
          toast.error(intl.formatMessage({ id: 'error_404' }));
          break;
        }
        case 500: {
          toast.error(intl.formatMessage({ id: 'error_500' }));
          break;
        }
        default: {
          toast.error(intl.formatMessage({ id: 'error_server_responded' }));
        }
      }
    } else if (error.request) {
      // ************** haven't got the response from server
      toast.error(intl.formatMessage({ id: 'error_server_not_responded' }));
    } else {
      // ************** something went terribly wrong, idk
      toast.error(intl.formatMessage({ id: 'error_other' }));
    }
  } else {
    // #TODO
  }
}

export default errorHandler;
