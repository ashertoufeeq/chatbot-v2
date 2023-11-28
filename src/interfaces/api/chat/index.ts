import axios from "axios";

export const service = ({msg}:{msg: string}) => (axios.post('https://bananachatapi-production.up.railway.app/chatbot/', {
    message: msg
}));

