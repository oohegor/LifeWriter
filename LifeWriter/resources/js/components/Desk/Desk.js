import React, {useState} from 'react';
import Book from './Book/Book';

export default function Desk()
{
    const [silentMode, setSilentMode] = useState(false);

    const useSilentMode = () => {
        setSilentMode(!silentMode);
    };

    return (
        <div className='desk'>
            <div className='desk__row'>
                <Book silentMode={silentMode}/>
                <Tools onChange={useSilentMode}/>
            </div>
        </div>
    )
}

const Tools = ({onChange}) => {
    return (
        <div className='tools'>
            <div className='tools__row'>
                <input
                    type='checkbox'
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
