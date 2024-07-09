import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { store } from "./Redux/Store/store.js";
import { Provider } from "react-redux";
import Home from "./Pages/Home/index.jsx";
import SignUp from "./Pages/SignUp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "ABC",
//         element: <SignUp />,
//       },
//     ],
//   },
//   // {
//   //   path: "*",
//   //   element: <App />,
//   // },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
);
