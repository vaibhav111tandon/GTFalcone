import React from 'react';
import { useEffect, useState } from 'react';
import { AutoComplete, Radio } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

function App() {

  const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [token, setToken] = useState();
  const [planet1, setPlanet1] = useState();
  const [planet2, setPlanet2] = useState();
  const [planet3, setPlanet3] = useState();
  const [planet4, setPlanet4] = useState();
  const [vehicle1, setVehicle1] = useState();
  const [vehicle2, setVehicle2] = useState();
  const [vehicle3, setVehicle3] = useState();
  const [vehicle4, setVehicle4] = useState();
  const [value, setValue] = React.useState(1);

  const fetchCall = async (subpath) => {
    const answer = await fetch(`https://findfalcone.herokuapp.com/${subpath}`)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => error);    
    return answer;
  }

  const fetchToken = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: {},
        redirect: 'follow'
    };

    const result = await fetch("https://findfalcone.herokuapp.com/token", requestOptions)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => error);    
    return result;
  }

  const filterPlanets = (p) => {
    const filteredPlanets = planet.filter((item) => item.value !== p);
    setPlanet([...filteredPlanets]);
  }

  const revampVehicleCount = (v, c) => {

    if(c === 1 && vehicle1) {
      vehicle.forEach(ve => {
        if(ve.name === vehicle1) ve.total_no = ve.total_no + 1;
      })
    }
    else if(c === 2 && vehicle2) {
      vehicle.forEach(ve => {
        if(ve.name === vehicle2) ve.total_no = ve.total_no + 1;
      })
    }
    else if(c === 3 && vehicle3) {
      vehicle.forEach(ve => {
        if(ve.name === vehicle3) ve.total_no = ve.total_no + 1;
      })
    }
    else if(c === 4 && vehicle4) {
      vehicle.forEach(ve => {
        if(ve.name === vehicle4) ve.total_no = ve.total_no + 1;
      })
    }

    vehicle.forEach(ve => {
      if(ve.name === v && ve.total_no !== 0) ve.total_no = ve.total_no - 1;
    })
  }

  const submitForm = () => {
    
  }


  useEffect(() => {
    async function callInSync(){
      const vehicles = await fetchCall('vehicles');
      const planets = await fetchCall('planets');
      const token = await fetchToken();
      
      planets.forEach((planet) => {
        delete Object.assign(planet, {['value']: planet['name'] })['name'];
      })
      setPlanet([...planets]);
      setVehicle([...vehicles]);
      setToken(token.token);
    }  
    callInSync();
    return () => {
    }
  }, [])

  return (
    <div className="app">
      <header>
        <div className="app__menu">
          <button className="app__menu__button">Reset</button>
          <button className="app__menu__button">GeekTrust Home</button>
        </div>
        <h1 className="app__header">Finding Falcone!</h1>
      </header>
      <main className="content">
        <h2 className="content__heading">Select planets you want to search in:</h2>
        <div className="content__container">
          <div>
            <h4 className="destination__label">Destination 1</h4>
            <AutoComplete
              style={{
                width: 150,
                color: 'black'
              }}
              options={planet}
              placeholder="Select"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onSelect={(e) => {filterPlanets(e); setPlanet1(e);}}
            />
            <br/>
            {(planet1) 
            ?(<Radio.Group style={{width: '150px'}} onChange={(e) => {setVehicle1(e.target.value); revampVehicleCount(e.target.value, 1);}} value={vehicle1}>
              {
                vehicle.map((e) => {
                  return (<Radio value={e.name} disabled={(e.total_no === 0)? true: false}>{e.name} ({e.total_no})</Radio>)
                })
              }
            </Radio.Group>)
            : ''
            }
          </div>
          <div>
            <h4 className="destination__label">Destination 2</h4>
            <AutoComplete
              style={{
                width: 150,
              }}
              options={planet}
              placeholder="Select"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onSelect={(e) => {filterPlanets(e); setPlanet2(e);}}
            />
            <br />
            {(planet2) 
            ?(<Radio.Group onChange={(e) => {setVehicle2(e.target.value); revampVehicleCount(e.target.value, 2);}} value={vehicle2}>
              {
                vehicle.map((e) => {
                  return (<Radio value={e.name} disabled={(e.total_no === 0)? true: false}>{e.name} ({e.total_no})</Radio>)
                })
              }
            </Radio.Group>)
            : ''
            }
          </div>
          <div>
            <h4 className="destination__label">Destination 3</h4>
            <AutoComplete
              style={{
                width: 150,
              }}
              options={planet}
              placeholder="Select"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onSelect={(e) => {filterPlanets(e); setPlanet3(e);}}
            />
            <br />
            {(planet3) 
            ?(<Radio.Group onChange={(e) => {setVehicle3(e.target.value); revampVehicleCount(e.target.value, 3);}} value={vehicle3}>
              {
                vehicle.map((e) => {
                  return (<Radio value={e.name} disabled={(e.total_no === 0)? true: false}>{e.name} ({e.total_no})</Radio>)
                })
              }
            </Radio.Group>)
            : ''
            }
          </div>
          <div>
            <h4 className="destination__label">Destination 4</h4>
            <AutoComplete
              style={{
                width: 150,
              }}
              options={planet}
              placeholder="Select"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onSelect={(e) => {filterPlanets(e); setPlanet4(e);}}
            />
            <br />
            {(planet4) 
            ?(<Radio.Group onChange={(e) => {setVehicle4(e.target.value); revampVehicleCount(e.target.value, 4)}} value={vehicle4}>
              {
                vehicle.map((e) => {
                  return (<Radio value={e.name} disabled={(e.total_no === 0)? true: false}>{e.name} ({e.total_no})</Radio>)
                })
              }
            </Radio.Group>)
            : ''
            }
          </div>
        </div>
        <div className="button__container">
          <button
            className="submit__button"
            onClick={submitForm} 
            disabled = {(vehicle1 && vehicle2 && vehicle3 && vehicle4 && planet1 && planet2 && planet3 && planet4)? false: true}>
              Find Falcone
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
