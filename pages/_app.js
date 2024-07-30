import "@/styles/globals.css";

import { SocketProvider } from "@/context/socket";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
    <SocketProvider>
       <Component {...pageProps} />
       <ToastContainer/>
    </SocketProvider>
  )
}
