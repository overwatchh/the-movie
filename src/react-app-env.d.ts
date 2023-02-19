/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    REACT_APP_API_KEY: string;
    REACT_APP_BASE_URL: string;
    REACT_APP_BASE_IMG_URL: string;
  }
}
