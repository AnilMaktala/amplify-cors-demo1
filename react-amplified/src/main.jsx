import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: "https://d14r4o8aszk29q.cloudfront.net/graphql",
      defaultAuthMode: "apiKey",
      apiKey: "da2-nnk5femkwnfevajp4dtntt7z3a",
      region: "us-east-1",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
