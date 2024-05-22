import React from 'react'
import './Grid3.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
function Grid3() {
  return (
    <div>
        <div className='child1'>
            <div >
                <div class="section3">
                    <img src='https://replay.software/sleeve/images/IconArrayArtwork@3x.png'></img><br></br>
                    <h1>Artwork</h1><br></br>
                    <p>Scale artwork all the way up or all the way down. Round the corners or leave them square.</p>
                    <p>Choose shadow and lighting effects to bring your album artwork to life.</p>
                    <p>Or hide it completely.</p>
                </div>
                <div class="section4">
                <img src={img1} alt="BigCo Inc. logo" />
                </div>
            </div>
            <div>
                <div class="section3">
                <div className='img6'><img src='https://replay.software/sleeve/images/IconArrayTrack@3x.png'></img></div>
                    <h1>Typography</h1>
                    <p>Pick the track info you want to display, and then exactly how to display it.<br></br>
Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>
                </div>
                <div class="section4"><img src={img2} alt="BigCo Inc. logo" /></div>
            </div>
            <div>
                <div class="section3" >
               <div className='grpimg'> <div className='img3'><img src='https://replay.software/sleeve/images/IconArrayInterface@3x.png'></img></div>
        <div className='img4'><img src='https://replay.software/sleeve/images/IconArrayLayout@3x.png'></img></div>
        <div className='img7'><img src='https://cdn-icons-png.flaticon.com/512/11043/11043763.png'></img></div>
        </div>
                    <h1>Interface</h1>
                    <p>Customize the layout, alignment and position to fit your setup.<br></br>
Show and hide playback controls. Add a backdrop layer and customize it.

</p>
                </div>
                <div class="section4"><img src={img3} alt="BigCo Inc. logo" /></div>
            </div>
            <div>
                <div class="section3">
                <div className='img2'><img src='https://replay.software/sleeve/images/IconArrayWindow@3x.png'></img></div>
        
                    <h1>Settings</h1>
                    <p>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.<br></br>
Show it in the Dock, choose from custom icons, or keep it on the Desktop only.<br></br>
Set your custom keyboard shortcuts and integrate with the apps you use.</p>
                </div>
                <div class="section4"><img src={img4} alt="BigCo Inc. logo" /></div>
            </div>
           
        </div>
        <div className='scroll'>
            <h4>INTEGRATIONS</h4>
        
        </div><br></br>
        <div className='scroll'><h1>Like, Scrobble.</h1></div><br></br>
    </div>
  )
}

export default Grid3