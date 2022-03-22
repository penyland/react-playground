import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { GraphData, loginRequest } from "../authConfig";
import { requestProfileData } from "../graph";
import ProfileData from "./ProfileData";

export const ProfileContent: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState<GraphData>();

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
      requestProfileData(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        requestProfileData(response.accessToken).then(response => setGraphData(response));
      });
    });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {graphData ?
        <ProfileData graphData={graphData} />
        :
        <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
      }
    </>
  );
};