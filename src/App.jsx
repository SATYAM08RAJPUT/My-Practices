import "./App.css";
import ErrorTracking from "./Errors/firstError";
import { ErrorBoundary } from "@sentry/react";

function App() {
  return (
    <>
      <h3>First Repo Pratices</h3>
      <ErrorBoundary fallback={<p>Oops! Something went wrong.</p>}>
        <ErrorTracking />
      </ErrorBoundary>
    </>
  );
}

export default App;
