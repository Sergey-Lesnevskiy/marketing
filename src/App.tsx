import React from 'react';
// import MyComponent from './components/myComponent';
import MyHeader from './components/Header/myHeader';
import Footer from './components/Footer/Footer';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
    return (
        <>
            <MyHeader />
            <AppRouter />
            <Footer />
        </>
    );
};

export default App;

