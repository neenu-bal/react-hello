import { useEffect, useState } from "react";
// import fetchName from '../service/fetchName';
function Widget(props) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{

      const result = await fetch(`http://localhost:9005/`)
      const jsonData = await result.json();
      console.log("data", jsonData)
      setProviders(jsonData.data);
    }
   fetchData();
   }, []);
  

    return ( 
    
    <div >

      <header className="App-header">{props.name} </header>
      <div className="table-cont">
      <table >
        <thead>
        <td className="Value" >Name</td>  
        <td className="Value" >Device count</td>  


        </thead>
      {providers && providers.map(provider => (
        <tr>
        <td className="Value" key={provider.id}>{provider.name}</td>  
        <td className="Value" key={provider.id}>{provider.deviceCount}</td>  

        </tr>
       ))}
       
      </table>
      </div>
  

     </div>)
       
   
  }
  export default Widget;