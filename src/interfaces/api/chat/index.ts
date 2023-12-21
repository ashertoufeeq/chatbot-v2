import axios from "axios";
import {config} from '../../../utils/config'

export const service = ({msg}:{msg: string}) => (axios.post(`${config?.baseUrl}/chatbot/`, {
    message: msg
}));

