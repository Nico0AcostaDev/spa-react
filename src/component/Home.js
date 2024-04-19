import React, { useState, useEffect } from 'react'

function Home() {

  const [servicio, setServicio] = useState(null); 

  const obtenerServicios = () => {
    
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
     
    fetch("https://api.football-data.org/v4/matches", {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })
    .then(response => response.json()) 
  .then(data => {
    // Aquí puedes trabajar con los datos recibidos en la respuesta
    console.log(data);
    // Por ejemplo, puedes devolver los datos aquí si los necesitas
   setServicio(data);
  })
  }
    
  
  useEffect(() => {
    obtenerServicios();
}, []);

    return (
      <div class="container-sm bg-primary py-3 bg-opacity-25 text-center shadow-sm overflow-auto">  
      <div class="row">
        <div class="col-md-6">
          <h3>Proyectos Disponibles</h3>
          <div class="card bg-light my-3"> 
            <div class="card-body">  
              <h5 class="card-title">Card title</h5>
              <p class="card-text">asd</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> 
          </div>
        </div>
        <div class="col-md-6">
          <h3>Servicios disponibles</h3>
          <div class="card bg-light my-3"> 
            <div class="card-body">  
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> 
          </div>
        </div>
      </div>
    </div>
    
    



    )
  }
 
export default Home;

