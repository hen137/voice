import './Member.css';

export default function Group({ memberName, memberDescription }) {
    const firstName = memberName.split(" ")[0];
    const lastName = memberName.split(" ")[1];
    
    return (
        <div className="member">
            <img className='headshot' src={"https://mindfulconsumer-media.s3.us-east-2.amazonaws.com/headshots/" + firstName + "+" + lastName + ".jpg"} alt="" />
            <h3 className='margin font-SCP'>{memberName}</h3>
            <p className='margin font-SCP'>{memberDescription}</p>
        </div>
    );
}