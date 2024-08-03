import axios from "axios";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = BASE_URL;

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
