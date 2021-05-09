import React from 'react';
import logo from './logo.svg';
import './App.css';


const mascotas = [
  {id: 1, nombre: 'Toby', edad: 2, especie: 'Gato'},
  {id: 2, nombre: 'Hulk', edad: 5, especie: 'Perro'},
  {id: 3, nombre: 'Sasha', edad: 2, especie: 'Uron'},
  {id: 4, nombre: 'victor', edad: 1, especie: 'Pajaro'},
  {id: 5, nombre: 'Camilo', edad: 3, especie: 'Hamster'}
]

class App extends React.Component{
  state = {
    mascotas: mascotas
  }
  render(){
    return(
      <>
      <div>
        <section>
          <button>Ingresar nueva mascota</button>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Especie</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.mascotas.map((elemento) => (
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.nombre}</td>
                      <td>{elemento.edad}</td>
                      <td>{elemento.especie}</td>
                      <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </section>
      </div>      
      </>
    )
  }
}

export default App;
