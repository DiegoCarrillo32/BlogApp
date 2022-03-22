import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();
export const notify = (body:string, success:boolean, custom?:any) => {

    success ? toast.success(body) : toast.error(body)
    
}