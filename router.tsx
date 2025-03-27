import { lazy } from 'react';
import VladlenRedux from './src/page/VladlenRedux/VladlenRedux';

const MyComponent = lazy(() => import('./src/page/Main/myComponent'));
const Vladlen = lazy(() => import('./src/page/Vladlen/Vladlen'));
// const SignIn = lazy(() => import('./src/Page/SignIn/SignIn'));
// const SignUp = lazy(() => import('./src/Page/SignUp/SignUp'));
// const Welcome = lazy(() => import('./src/Page/Welcome/Welcome'));

// import { SIGNIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE, WELCOME_ROUTE } from './src/utils/consts';
export const MAIN_ROUTE = '/main';
export const VLADLEN_ROUTE = '/vladlen';
export const VLADLEN_REDUX_ROUTE = '/vladlenredux';
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <MyComponent />,
  },
  {
    path: VLADLEN_ROUTE,
    Component: <Vladlen />,
  },
  {
    path: VLADLEN_REDUX_ROUTE,
    Component: <VladlenRedux />,
  },
  
];
export const privateRoutes = [

];