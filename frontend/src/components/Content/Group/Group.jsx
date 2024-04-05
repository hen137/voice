import React from 'react'
import Member from './Member/Member';
import './Group.css';

export default function Group() {
    return (
        <div className='group'>
            <Member memberName={"Henry Abramovich"} memberDescription={"Computer Science - Fourth Year"}/>
            <Member memberName={"Jasraj Singh"} memberDescription={"Criminology - X Year"}/>
            <Member memberName={"Jay Sharma"} memberDescription={"Software Engineering - X Year"}/>
            <Member memberName={"Sana Sharma"} memberDescription={"Philosophy - X Year"}/>
            <Member memberName={"Hiva Sharma"} memberDescription={"Criminology - Fourth year"}/>
            <Member memberName={"TonyJin Sharma"} memberDescription={"Interdisciplinary Social Science - Fourth Year"}/>
            <Member memberName={"Manasha Sharma"} memberDescription={"Business of Commerce - X Year"}/>
        </div>
    );
}


