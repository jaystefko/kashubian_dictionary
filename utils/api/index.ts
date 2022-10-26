import { AxiosRequestConfig } from 'axios';
import { BasicAuth } from '../types';

export const url = process.env.API_URL;

export function getAxiosRequestConfig(auth: BasicAuth): AxiosRequestConfig {
  return {
    auth: auth,
  };
}

export * from './meaning';
export * from './word';
export * from './file';
