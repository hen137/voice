import { useState } from 'react';
import './Podcast.css'

export default function Podcast() {
  const state = [
    { title: 'Episode 1: The Nitty Gritties of Consumerism', src_mp4: '/episodes/Mindful_Consumer_Podcast_Ep1video.mp4' },
    { title: 'Episode 2: A Techno-social perspective', src_mp4: '/episodes/Mindful_Consumer_Podcast_Ep2video.mp4' },
    { title: 'Episode 3: Digital Detox', src_mp4: '/episodes/Mindful_Consumer_Podcast_Ep3video.mp4' }
  ]

  const [pIndex, setPIndex] = useState(0);
  const [pState, setPState] = useState(state[0]);

  function handlePI(offset) {
    if ((pIndex + offset) >= 0 && (pIndex + offset) <= 2) {
      setPIndex(pIndex + offset);
    } else if ((pIndex + offset) > 2) {
      setPIndex(0);
    } else if ((pIndex + offset) < 0) {
      setPIndex(2);
    }

    setPState(state[pIndex]);
  }

  return (
    <div className='podcast'>
      <h3 className='podcast-title'>{pState.title}</h3>
      <div className='interface'>
        <div className='img-cont' onClick={() => handlePI(-1)}>
          <img className='left-arrow' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Farrow-icon-png-transparent%2Farrow-icon-png-transparent-4.png&f=1&nofb=1&ipt=f52419e1d47898642e2af6746ce63b9e4d529ea0ea497cc26d952f4e468362fe&ipo=images" alt="" />
        </div>
        <video controls className='video' key={pState.title}>
          <source src={pState.src_mp4} type='video/mp4' />
          <source src={pState.src_webm} type='video/webm' />
        </video>
        <div className='img-cont' onClick={() => handlePI(1)}>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Farrow-icon-png-transparent%2Farrow-icon-png-transparent-4.png&f=1&nofb=1&ipt=f52419e1d47898642e2af6746ce63b9e4d529ea0ea497cc26d952f4e468362fe&ipo=images" alt="" />
        </div>
      </div>
    </div>
  );
}

