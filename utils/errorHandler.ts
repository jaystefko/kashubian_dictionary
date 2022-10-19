import axios from 'axios';
import { IntlShape } from 'react-intl';
import { toast } from 'react-toastify';

type ErrorDataItem = {
  message: string;
  name: string;
};

type ErrorData = {
  fieldErrors: Array<ErrorDataItem>;
  objectErrors: Array<ErrorDataItem>;
  paramErrors: Array<ErrorDataItem>;
};

function logOut() {
  localStorage.clear();
  window.location.reload();
}

function transpileErrorName(name: string, intl: IntlShape) {
  return name
    .replaceAll(/[\[\]\.]/g, ' ')
    .split(' ')
    .filter((a) => a)
    .map((a) => (isNaN(Number(a)) ? Number(a) + 1 : intl.formatMessage({ id: a })))
    .join(' ');
}

function notify400Error(data: Array<ErrorDataItem>, intl: IntlShape) {
  data.forEach((e) => {
    toast.error(`${intl.formatMessage({ id: e.message })}: ${transpileErrorName(e.name, intl)}`);
  });
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
          const data = error.response.data as ErrorData;
          if (data && data.fieldErrors && data.objectErrors && data.paramErrors) {
            notify400Error(data.fieldErrors, intl);
            notify400Error(data.objectErrors, intl);
            notify400Error(data.paramErrors, intl);
          } else {
            toast.error(intl.formatMessage({ id: 'error_400' }));
          }
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
