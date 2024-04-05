import Member from './Member/Member';
import './Group.css';

export default function Group() {
    return (
        <div className='group'>
            <Member memberName={"Henry Abramovich"} memberDescription={"Computer Science - Fourth Year"}/>
            <Member memberName={"Jasraj Singh"} memberDescription={"Criminology - Fourth Year"}/>
            <Member memberName={"Jay Sharma"} memberDescription={"Software Engineering - Fourth Year"}/>
            <Member memberName={"Sana Izadi"} memberDescription={"Philosophy - Fourth Year"}/>
            <Member memberName={"Hiva Akhondzadeh"} memberDescription={"Criminology - Fourth year"}/>
            <Member memberName={"YinHaoYang Jin"} memberDescription={"Interdisciplinary Social Science - Fourth Year"}/>
            <Member memberName={"Manasha Shrestha"} memberDescription={"Business of Commerce - Fourth Year"}/>
        </div>
    );
}


