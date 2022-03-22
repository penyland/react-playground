import { graphConfig, GraphData, loginRequest } from "./authConfig";
import { msalInstance } from "./index"

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function requestProfileData(accessToken: string): Promise<GraphData> {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getprofilePhoto(accessToken: string) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  headers.append("Content-Type", "image/jpeg");

  return fetch(graphConfig.graphMePhotoEndpoint, options)
    .then((response) => {
      if (response != null && response.ok) {
        response.blob().then((data) => {
          if (data !== null) {
            window.URL = window.URL || window.webkitURL;
            return window.URL.createObjectURL(data);
          }
        });
      } else {
        throw new Error("Profile image not found");
      }
    })
    .catch((error) => {
      throw new Error("Profile image not found");
    });
}

export async function getToken() {
  const request = {
    ...loginRequest
  };

  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  msalInstance.acquireTokenSilent(request).then((response) => {
    return response.accessToken;
  }).catch((e) => {
    msalInstance.acquireTokenPopup(request).then((response) => {
      return response.accessToken;
    });
  });
}