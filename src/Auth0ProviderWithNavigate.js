import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  const auth0Config = {
    domain: process.env.REACT_APP_AUTH_DOMAIN,
    clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: "http://localhost:3000/callback",
      audience: process.env.REACT_APP_AUTH_AUDIENCE,
    },
  };

  return <Auth0Provider {...auth0Config}>{children}</Auth0Provider>;
};
