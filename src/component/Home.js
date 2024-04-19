import React, { Component } from 'react'

export default  class Home extends Component {

  render() { 
    return (
      <div class="container-sm bg-primary py-3 bg-opacity-25 text-center shadow-sm overflow-auto">  
      <div class="row">
        <div class="col-md-6">
          <h3>Proyectos Disponibles</h3>
          <div class="card bg-light my-3"> 
            <div class="card-body">  
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
}
