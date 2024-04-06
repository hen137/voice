import './Member.css';

export default function Group({ memberName, memberDescription }) {
    return (
        <div className="member">
            <img className='headshot' src={"/headshots/" + memberName + ".jpg"} alt={"/headshots/squid.jpg"} />
            <h3 className='margin font-SCP'>{memberName}</h3>
            <p className='margin font-SCP'>{memberDescription}</p>
        </div>
    );
}