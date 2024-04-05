import './Navbar.css'

export default function Navbar({ changeContent }) {
  return (
    <nav className="navbar">
      <h1 className="font-Pacifico">Mindful Consumer</h1>
      <div>
        <ul className="nav-items">
          <li className='nav-link' onClick={() => changeContent(0)}>&nbsp;what we do&nbsp;</li>
          <li className='nav-link' onClick={() => changeContent(1)}>&nbsp;who we are&nbsp;</li>
          <li className='nav-link' onClick={() => changeContent(2)}>podcast</li>
        </ul>
        <div className="nav-socials">
          
            <a className='nav-icon' href="https://open.spotify.com/show/7kX45RwQb5BcyQzRnROXSi"><img className='spotify' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshuffleapp.io%2Fimages%2Fspotify_logo.png&f=1&nofb=1&ipt=b8e9d3db94ac4f2c45a6c76ef868b898d06b683c6d24bc79e5e270a716f83c1d&ipo=images" alt="" /></a>
          
            <a className='nav-icon' href="https://www.instagram.com/mindfulconsumer9/"><img className='instagram' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Finstagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png&f=1&nofb=1&ipt=4d98a2b4dfea850e5d0355cc0e97d0c2b710e7bd88e291f6cddc20b8c39c3cf0&ipo=images" alt="" /></a>
          
            <a className='nav-icon' href="https://www.youtube.com/"><img className='youtube' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fyoutube-transparent-icon%2Fyoutube-transparent-icon-17.png&f=1&nofb=1&ipt=80716031ef42121b68c3f7ffe893eda8caad47e7ad3ce68387d0eb85e83b7361&ipo=images" alt="" /></a>
          
        </div>
      </div>
    </nav>
  );
}