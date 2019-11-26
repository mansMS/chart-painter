import React from 'react';

const EscapeButton = ({ escapeClickHandler, disabled }) => {
    return (
        <button className='EscapeButton' disabled={disabled} onClick={escapeClickHandler}>Назад</button>
    )
}

export default EscapeButton;