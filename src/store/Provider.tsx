import axios from "axios";
import { Provider as ReduxProvider } from "react-redux";
import { store as MakeStore } from "./store";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = BASE_URL;

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const store = MakeStore();

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
