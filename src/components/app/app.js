import React from 'react';
import ChartContainer from '../chart-container';
import { cn } from '@bem-react/classname';
import './app.css';

const app = cn('App');

const App = () => {
    
    return (
        <div className={app()}>
            <h1>Chart-Painter-App</h1>
            <ChartContainer />
        </div>
    )
}

export default App;