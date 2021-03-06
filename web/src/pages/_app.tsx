import "../styles/global.css";

import { SideBar } from "../components/SideBar";
import { Provider } from "next-auth/client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider session={pageProps.session}>
      {router.pathname !== "/login" ? <SideBar /> : ""}

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
