import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Knyga from './Knyga';

function App() {

  const [knygos, setKnygos] = useState([]);


  useEffect(() => {
  axios.get('https://in3.dev/knygos/')
  .then(function (response) {
    setKnygos(response.data);
  })
  
    },[])

  const lentynaKnygoms = (id) => {
    const knygosCopy = knygos.slice();
      for(let i = 0; i < knygosCopy.length; i++){
        if(id === knygosCopy[i].id) {
          knygosCopy[i].completed = !knygosCopy[i].completed;
        break
    }
  }
  setKnygos(knygosCopy);
}




    return (<div className="knyga-container">
      {knygos.map((knyga)=>(<Knyga key={knyga.id} data={knyga} sniuriukas={lentynaKnygoms}></Knyga>))}
    </div>
    );
    }
    
export default App;


