import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-nav">
      <div className="n-container">
        <h1 className="n-title">Mindful Consumer</h1>
        <ul className="n-navitems">
          <li>what we do</li>
          <li>who we are</li>
          <li>podcast</li>
        </ul>
        <div className="n-socials">
          <a href=""><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Finstagram%2Finstagram_PNG9.png&f=1&nofb=1&ipt=6c4f6fa5f0c96672d4a579f64f0f22d09420c64a3203d76badd22ee075c37671&ipo=images" alt="" /></a>
          <a href=""><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F016%2F716%2F458%2Foriginal%2Fspotify-icon-free-png.png&f=1&nofb=1&ipt=5ae1024ae3297aec1d3f23133970a8c82270cc67dda3938c8e8c7edead8f0234&ipo=images" alt="" /></a>
          <a href=""><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1590430652red-youtube-logo-png-xl.png&f=1&nofb=1&ipt=0491ce121e2066a59e1397fed1e8c20208c947262feb82082940e0d8ff1f5706&ipo=images" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
