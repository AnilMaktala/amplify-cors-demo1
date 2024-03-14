import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: "https://d34duruv158z3p.cloudfront.net/graphql",
      defaultAuthMode: "apiKey",
      apiKey: "da2-wy3p7cxszrf5ndvzpqkmph5dvy",
      region: "us-east-1",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
