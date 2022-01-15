import React, { useEffect, useState } from 'react'
import './Main.css'

import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'

const Main = ({ selectedPunk, punkListData }) => {

    const[activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className="selectedPunk" 
                        src={activePunk.image_original_url} 
                        alt="" />
                    </div>
                </div>
                <div className="punkDetail" style={{color: "#fff"}}>
                    <div className="title">{activePunk.name}</div>
                    <span className="itemNumber">.{activePunk.token_id}</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img className="" src={activePunk.owner.profile_image_url} alt=""/>
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>{activePunk.owner.address}</div>
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
