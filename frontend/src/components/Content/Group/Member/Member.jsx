import './Member.css';

export default function Group({ memberName, memberDescription }) {
    const img = "squid.jpg"
    return (
        <div className="member">
            <img className='headshot' src={process.env.PUBLIC_URL + '/headshots/' + img} alt="" />
            <h3 className='name font-SCP'>{memberName}</h3>
            <p className='desc font-SCP'>{memberDescription}</p>
        </div>
    );
}
