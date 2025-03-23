import { lazy } from 'react';

const MyComponent = lazy(() => import('./src/components/myComponent'));
// const SignIn = lazy(() => import('./src/Page/SignIn/SignIn'));
// const SignUp = lazy(() => import('./src/Page/SignUp/SignUp'));
// const Welcome = lazy(() => import('./src/Page/Welcome/Welcome'));

// import { SIGNIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE, WELCOME_ROUTE } from './src/utils/consts';
export const MAIN_ROUTE = '/main';
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <MyComponent />,
  },
  
];
export const privateRoutes = [

];