import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: "https://dcc05l24vsux6.cloudfront.net/graphql",
      defaultAuthMode: "apiKey",
      apiKey: "da2-wla2u3mdrvcc7fv4uzs4rw2grm",
      region: "us-east-1",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
