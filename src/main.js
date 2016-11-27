import ClientLib from './libs/client';

export const Client = ClientLib;
/*
{
    protocol = 'ws',
    server = 'localhost',
    port = '8080',
    onData,
    onError
}
devuelve la función sendAction(service, room, action)
service = 'DEFAULT', // Servicio al que comunicar
room = 'DEFAULT', // Room con la que comunicar
action = {} // Accion a enviar
*/
export default Client;
