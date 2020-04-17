import Registration from './Registration';
export default class WebSocketConnection{
    constructor(url) {
        let ws = new WebSocket(url);
        this.ws = ws
    }
};
