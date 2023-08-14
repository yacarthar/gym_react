import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "./helpers/PageLoader";

const AuthGuard = ({ component, returnTo }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <PageLoader />
      </div>
    ),
  });
  return <Component />;
};

export default AuthGuard;
