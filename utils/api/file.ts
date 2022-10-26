import axios from 'axios';
import { getAxiosRequestConfig, url } from '.';
import { BasicAuth } from '../types';

export async function getFile(id: number) {
  return axios.get(`${url}kashubian-entry/${id}/file`);
}

export async function uploadFile(file: any, id: number, auth: BasicAuth) {
  return axios.post(`${url}kashubian-entry/${id}/file`, file, getAxiosRequestConfig(auth));
}

export async function deleteFile(id: number, auth: BasicAuth) {
  return axios.delete(`${url}kashubian-entry/${id}/file`, getAxiosRequestConfig(auth));
}
