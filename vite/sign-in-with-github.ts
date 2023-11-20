import { frontendCredentials, makeRedirectUriFrontend } from "./env";

export const signInWithGitHubLink = () => {
  const params = new URLSearchParams();
  params.append("redirect_uri", makeRedirectUriFrontend());
  params.append("client_id", frontendCredentials().VITE_CLIENT_ID);
  params.append("scope", "user");

  const url = new URL("https://github.com/login/oauth/authorize");
  url.search = params.toString();

  return url.toString();
};