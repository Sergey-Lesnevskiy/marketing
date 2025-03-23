import { Navigate, Routes, Route } from 'react-router';
import { publicRoutes } from '../../router';
import { MAIN_ROUTE } from '../../router';

// import { useEffect, useState } from 'react';

function AppRouter() {
  // const [userValid, setUserValid] = useState(true);
  // const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       setUserValid(true);
  //     } else {
  //       setUserValid(false);
  //     }
  //   });
  //   const time = setTimeout(() => {
  //     userValid && setCurrentTime(Math.floor(Date.now() / 1000));
  //   }, 1500);

  //   auth.currentUser?.getIdTokenResult().then((user) => {
  //     currentTime >= Number(user.claims.auth_time) + 3600 && auth.signOut();
  //   });
  //   return function cleanup() {
  //     clearInterval(time);
  //   };
  // }, [currentTime, userValid]);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter;
