import React from 'react';
// import MyComponent from './components/myComponent';
import MyHeader from './components/myHeader';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
    return (
        <>
            <MyHeader />
            <AppRouter />
        </>
    );
};

export default App;

