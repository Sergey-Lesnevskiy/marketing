// import { NavLink as NavLinkReactRotuter } from 'react-router-dom';
import { NavLink} from 'react-router';
// import { useState } from 'react';
// import { createPortal } from 'react-dom';
import './Navigation.css'

const Navigation = () => {
  // const { t, i18n } = useTranslation();
  // const { pathname } = useLocation();
  // const str = useAuthState(auth);
  // const userValid = !!str[0]?.email;
  // const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <nav className='nav'>
        <>
          {/* <NavLinkReactRotuter to="/main"> */}
            <NavLink
              to="/main"
              >Main</NavLink>
            
          {/* </NavLinkReactRotuter> */}
          
        </>
    </nav>
  );
};

export default Navigation;
