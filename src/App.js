import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';


function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);


  useEffect(()=> {
      const getMyNfts = async ()=> {

        const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xa8d167e1f70d6d6c04F014E977C176f547771e1E&order_direction=asc')
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets);
      }

      return getMyNfts(); 
  }, [])

  console.log(punkListData);
  return (
    <div className="app">
      <Header/> 
      {
        punkListData.length > 0 && (
          <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
      <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )}
    </div>
  );
}

export default App;
 