import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://db54a88d610fa5e3795b733a4257223a@o4508816938434560.ingest.us.sentry.io/4508940777095168",
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
