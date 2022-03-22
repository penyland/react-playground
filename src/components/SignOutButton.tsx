import React from "react";
import { useMsal } from "@azure/msal-react";
import { NavDropdown } from "react-bootstrap";

/**
 * Renders a sign-out button
 */
export const SignOutButton: React.FC = (props) => {
    const { accounts, instance } = useMsal();
    const name = accounts[0] && accounts[0].name;

    const handleLogout = (logoutType: string) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "http://localhost:3000",
            });
        }
    }
    return (
        <NavDropdown title={name} id="basic-nav-dropdown" className="justify-content-end">
          <NavDropdown.Item href="#action/3.1" onClick={() => handleLogout("redirect")}>Signout</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    )
}