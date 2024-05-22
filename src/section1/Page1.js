import React from 'react'
import img from './img.png'
import './Page1.css';
function Page1() {
  return (
   <section>
    <div>
        
        <div class="player">
        <div class="wrapper">
            <div class="details">
                <div class="now-playing"><h1>Sleeve 2</h1></div><br></br>
                <div class="track-art"></div>
                <div class="track-name"><h2>The ultimate music accessory for your Mac.</h2></div><br></br>
                <div class="track-artist">Sleeve sits on the desktop, displaying and controlling the music you’re <br></br>
                 currently playing in <img src='https://th.bing.com/th/id/OIP._sIDbqFjfFFN7JKUeQc3qAHaHw?w=860&h=900&rs=1&pid=ImgDetMain'></img> 
                  Apple Music,<img src='https://th.bing.com/th/id/R.1abcde0249b1cd39d0dfd1d0a775af13?rik=hbKZ6MnjXMIIpQ&riu=http%3a%2f%2fheadabovemusic.com%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-icon.png&ehk=8u7lkBapxv5matD%2fiAPP4M%2fKgvY4ebOvNwJzmf%2fwPBs%3d&risl=&pid=ImgRaw&r=0'></img> 
                   Spotify, <img src='https://i.postimg.cc/P5FB20mH/image.png'></img> Doppler. Mac A</div>
            </div><br></br>
            <div class="mac-player">
        <div class="child-wrap1">
            <button><i class="fa fa-apple" aria-hidden="true"></i> Mac App Store</button>
        </div>
        <div class="child-wrap2">
            <button>Buy Directly <span class="price">$5.99</span></button>
        </div>
        
    </div><br></br>
   <div className='sub'> <p>No subscriptions.No in-app</p>
         <p> purchases.Requires macOS 11 Big Sur </p>
          <p>or later.</p><br></br></div>
    <div><br></br>
        <div class="child-wrap3">
            <button> <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/43/d4/c5/43d4c566-c43a-7aa9-41f4-38a79c6cd45b/AppIcon-0-0-85-220-0-0-4-0-2x-P3.png/1200x630bb.png'></img>Now with shelves and a progress bar. See whats new in sleeve 2.3  <i class="fa fa-arrow-circle-right"></i></button>
        </div><br></br><br></br><br></br>
        </div>
        <div className='new'>
        <p>New in <button>2.0</button></p>
        </div><br></br>
        <div className='themes'>
            <h1>Themes. Unlimited themes.</h1><br></br>
            <p>Themes in Sleeve make creating and switching between customizations easy. Share your own </p>
            <p>creations with friends and install as many themes as you like with just a double-click.</p>
        </div ><br></br><br></br><br></br>
        <div className='playlist'>
        <img src={img} alt="BigCo Inc. logo" />
        </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Page1