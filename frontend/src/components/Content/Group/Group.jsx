import React from 'react'
import Bio from '../Bio/Bio';
import './Group.css';

const Group = () => {
    return (
        <div className="n-group">
            <ul>
                <li><Bio headshot='squid.jpg'/></li>
                <li><Bio headshot='' /></li>
                <li><Bio headshot='' /></li>
                <li><Bio headshot='' /></li>
                <li><Bio headshot='' /></li>
                <li><Bio headshot='' /></li>
                <li><Bio headshot='' /></li>
            </ul>
        </div>
    )
}

export default Group
