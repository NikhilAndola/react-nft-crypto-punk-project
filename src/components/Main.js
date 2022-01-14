import React from 'react'
import './Main.css'

import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'

const Main = () => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className="selectedPunk" src='https://ipfs.io/ipfs/bafybeiedqim46toomijrnua3xp45yh7jhas5cwf3k276yf3epyulrrrhey' alt="" />
                    </div>
                </div>
                <div className="punkDetail" style={{color: "#fff"}}>
                    <div className="title">Green Goblin</div>
                    <span className="itemNumber">.#3</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img className="" src="https://ipfs.io/ipfs/bafybeiedqim46toomijrnua3xp45yh7jhas5cwf3k276yf3epyulrrrhey" alt=""/>
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0xa8d167e1f70d6d6c04F014E977C176f547771e1E</div>
                            <div className="ownerHandle">@nikhilAndola</div>
                        </div>
                        <div className="ownerLink"><img src={instagram} alt=""/></div>
                        <div className="ownerLink"><img src={twitter} alt=""/></div>
                        <div className="ownerLink"><img src={more} alt=""/></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
