import { init, InitConfig } from "next-firebase-auth";
import { environmentConfig, EnvironmentConfig } from "./environment";

const initAuth = () => {
  const config: InitConfig = {
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAuthEmulatorHost: "localhost:9099",
    firebaseAdminInitConfig: {
      credential: {
        projectId: environmentConfig.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: environmentConfig.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: environmentConfig.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: environmentConfig.FIREBASE_ADMIN_DATABASE_URL,
    },
    firebaseClientInitConfig: {
      apiKey: environmentConfig.FIREBASE_CLIENT_API_KEY,
      authDomain: environmentConfig.FIREBASE_CLIENT_AUTH_DOMAIN,
      databaseURL: environmentConfig.FIREBASE_CLIENT_DATABASE_URL,
      projectId: environmentConfig.FIREBASE_CLIENT_PROJECT_ID,
    },
    cookies: {
      name: "ExampleApp",
      keys: [
        environmentConfig.COOKIE_SECRET_CURRENT!,
        environmentConfig.COOKIE_SECRET_PREVIOUS!,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true,
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  };

  init(config);
};

export default initAuth;
