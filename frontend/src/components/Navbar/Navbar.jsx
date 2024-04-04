import './Navbar.css'

export default function Navbar({ changeContent }) {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Mindful Consumer</h1>
      <div>
        <ul className="nav-items">
          <li className='nav-link' onClick={() => changeContent(0)}>what we do</li>
          <li className='nav-link' onClick={() => changeContent(1)}>who we are</li>
          <li className='nav-link' onClick={() => changeContent(2)}>podcast</li>
        </ul>
        <ul className="nav-socials">
          <li>
            <a className='nav-icon spotify' href="https://open.spotify.com/episode/3etb2RXEmSjVd2hXHfzJm4?si=xncECQAQSrascNFoJzYQZA&nd=1&dlsi=2df3a29e72574df2"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fspotify-logo-png%2Fspotify-logo-transparent-spotify-logo-images-25.png&f=1&nofb=1&ipt=42d749c1bc30dfcc316ecf7396dc3a88eb1e4553f60f83390722bf09059ef626&ipo=images" alt="" /></a>
          </li>
          <li>
            <a className='nav-icon instagram' href="https://www.instagram.com/mindfulconsumer9/"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Finstagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png&f=1&nofb=1&ipt=4d98a2b4dfea850e5d0355cc0e97d0c2b710e7bd88e291f6cddc20b8c39c3cf0&ipo=images" alt="" /></a>
          </li>
          <li>
            <a className='nav-icon youtube' href="https://www.youtube.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-network-30%2F512%2Fsocial-06-1024.png&f=1&nofb=1&ipt=2a847c1f033e12838fb52c22d53328aabd14f8e8bd7a71fb383d022124235e8e&ipo=images" alt="" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}