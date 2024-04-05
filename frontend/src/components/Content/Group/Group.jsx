import React from 'react'
import Member from './Member/Member';
import './Group.css';

export default function Group() {
    return (
        <div className='group'>
            <Member memberName={"Henry Abramovich"} memberDescription={"i am so great. i am simply the best."}/>
            <Member memberName={"Jasraj Singh"} memberDescription={"wow i cant believe its not butter"}/>
            <Member memberName={"Jay Sharma"} memberDescription={"youre telling me a shrimp friend this rice? are ya at least paying him a living wage.."}/>
            <Member memberName={"Sana Sharma"} memberDescription={"the voices the freaking voicessssss. anyways, word to yo mama"}/>
            <Member memberName={"Hiva Sharma"} memberDescription={""}/>
            <Member memberName={"TonyJin Sharma"} memberDescription={""}/>
            <Member memberName={"Manasha Sharma"} memberDescription={""}/>
        </div>
    );
}


