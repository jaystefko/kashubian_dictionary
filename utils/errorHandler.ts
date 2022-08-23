import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastFunction } from './types';

function notify(message: string, type: ToastFunction = ToastFunction.ERROR) {
  // toast[type](message, { theme: 'colored' });
  console.log('here');
  toast.error(message);
}

function errorHandler(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // ************** got the response from server
      switch (error.response.status) {
        case 0: {
          notify('Serwer nie daje odpowiedzi. Prosimy spróbować ponownie później.');
          break;
        }
        case 400: {
          notify('Niepoprawne zapytanie.');
          break;
        }
        case 401: {
          notify('Wyamagane dane logowania.');
          break;
        }
        case 403: {
          notify('Brak autoryzacji.');
          break;
        }
        case 404: {
          notify('Nie odnaleziono zasobu.');
          break;
        }
        case 500: {
          notify('Serwer nie odpowiada. Prosimy spróbować później.');
          break;
        }
        default: {
          notify(
            'Przepraszamy, serwis jest chwilowo niedostępny. Prosimy spróbować ponownie później.'
          );
        }
      }
    } else if (error.request) {
      // ************** haven't got the response from server
      notify('Serwer nie odpowiada. Prosimy sprawdzić połączenie z internetem.');
    } else {
      // ************** something went terribly wrong, idk
      notify('Coś poszło nie tak');
    }
  } else {
    // #TODO
  }
}

export default errorHandler;
