import axios from 'axios'
import { url } from '.'
import { EmailBody } from '../types'

export async function sendEmail(body: EmailBody) {
	return axios.post(`${url}email`, body)
}
