import App from "./App";

import Dine from "./pages/Dine";
import Bar from "./pages/Bar";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: "/dine",
    element: (
      <>
        <Header />
        <Dine />
      </>
    ),
  },
  {
    path: "/bar",
    element: (
      <>
        <Header />
        <Bar />
      </>
    ),
  },
]);
