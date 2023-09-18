import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Opps!</h1>
      <p>Something went wrong!</p>
      {isRouteErrorResponse(error) && (
        <i>{error.statusText || error.statusText}</i>
      )}
    </div>
  );
}