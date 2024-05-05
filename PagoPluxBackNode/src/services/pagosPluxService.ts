import axios, { AxiosResponse } from 'axios';

// URL de la API 
const apiUrl: string = process.env.PAGOS_PLUX_API!;

// Credenciales para autenticación Basic
const username: string = process.env.PAGOS_PLUX_USER_NAME!;
const password: string = process.env.PAGOS_PASSWORD!;
const basicAuthHeader: string = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
const contentTypeHeader: string = 'application/json';

// Realiza una solicitud GET a la API con encabezado de autorización
export const validacionDeTransaccion=async (requestBody: any)=>{
    try {
        const response=await axios.post(apiUrl,requestBody, {
            headers: {
              'Authorization': basicAuthHeader,
              'Content-Type': contentTypeHeader
            }
          }) 
          return response.data; 
    } catch (error) {
        console.error('No se a podido conectar a la api')
    } 
}