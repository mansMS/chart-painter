import React from 'react';
import { cn } from '@bem-react/classname';
import './spinner.css';

const spinner = cn('Spinner');

const Spinner = () => {
    return (
        <div className={spinner()}>
            <div className={spinner('Icon')}>
                <div className={spinner('Helper')}></div>
            </div>
        </div>
    )
};

export default Spinner;