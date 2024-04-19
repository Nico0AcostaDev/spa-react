import React, { useState, useEffect } from 'react'
import endpoints from '../endpoints';

function Home() {

  const [servicio, setServicio] = useState(null); 

  const obtenerServicios = () => {
    
    var myHeaders = new Headers(); 

    fetch(endpoints.generation3, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })
    .then(response => response.json()) 
    .then(data => {console.log(data);
   setServicio(data);
  })
} 
  
  useEffect(() => {
    obtenerServicios();
  }, []);

    return (
      <div class="container-sm   py-3   text-center shadow-sm" style={{backgroundImage: "linear-gradient(to bottom, #9187d6, #8877d8, #8067d8, #7a55d8, #7541d6)"}}>
        <div class="row">
          <div className="col-md-6">
          <h3 style={{color:"white", position:"sticky" ,height:"50px"}}>Proyectos disponibles</h3>
            <div style={{padding:"10px"   ,backgroundColor:"transparent"}}>
              
                {servicio != null &&
                  servicio.abilities.map((item, index) => (
                    <div key={index} class="card-body" style={{border:"1px solid black", margin:"10px", borderRadius:"5px", backgroundColor:"white", padding:"15px"}}>
                      <h5 className="card-title">Nombre: {item.name}</h5>
                      <p className="card-text">Region: {item.url}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  ))}
              
            </div>
          </div>
          <div class="col-md-6">
            <h3 style={{color:"white", position:"sticky"  ,height:"50px"}}>Servicios disponibles</h3>
            <div class="card bg-light my-3">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
export default Home;

