import React from 'react'
import Member from './Member/Member';
import './Group.css';

export default function Group() {
    return (
        <div className='group'>
            <Member memberName={"Henry Abramovich"} memberDescription={""}/>
            <Member memberName={"Jasraj Singh"} memberDescription={""}/>
            <Member memberName={"Jay Sharma"} memberDescription={""}/>
            <Member memberName={"Sana Sharma"} memberDescription={""}/>
            <Member memberName={"Hiva Sharma"} memberDescription={""}/>
            <Member memberName={"TonyJin Sharma"} memberDescription={""}/>
            <Member memberName={"Manasha Sharma"} memberDescription={""}/>
        </div>
    );
}


