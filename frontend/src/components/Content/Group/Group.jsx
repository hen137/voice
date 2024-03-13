import React from 'react'
import Bio from '../Bio/Bio';
import './Group.css';

const Group = () => {
    return (
        <ul className="n-list">
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
                <li className='n-member'><Bio headshot='squid.jpg'/></li>
            </ul>
    )
}

export default Group
