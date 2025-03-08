import * as Sentry from "@sentry/react";

function ErrorTracking() {
  const handleError = () => {
    try {
      throw new Error("Yeh ek test error hai!");
    } catch (error) {
      Sentry.captureException(error); // Error ko Sentry pe bhejna
    }
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleError}>Trigger Error</button>
    </div>
  );
}

export default ErrorTracking;
