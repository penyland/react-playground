import { IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { Button } from "react-bootstrap";
import { loginRequest } from "../authConfig";

function handleLogin(instance: IPublicClientApplication) {
  instance.loginRedirect(loginRequest).catch(e => {
    console.error(e);
  });
}

export const SignInButton: React.FC = () => {
  const { instance } = useMsal();

  return (
    <div id="button-container">
      <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in</Button>
    </div>
  )
}