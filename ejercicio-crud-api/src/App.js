
import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://crudcrud.com/api/d195aa0edbc346b6a0dd99815dd0d959";

class App extends React.Component {
  state = {
    data: [],
    insertar: false,
    form: {
      id: '',
      nombre: '',
      edad: '',
      especie: ''
    }
  }
  peticionGet = () => {
    axios.get(url).then(Response => {
      this.setState({ data: Response.data })
    }).catch(error => {
      console.log(error.message);
    })
  }
  peticionPost = async () => {
    delete this.state.form.id;
    await axios.post(url,this.state.form).then(Response => {
      this.insertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }
  insertar = () => {
    this.setState({ insertar: !this.state.insertar });
  }
  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }
  componentDidMount() {
    this.peticionGet();
  }
  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <button className="btn btn-success" onClick={()=>this.insertar()}>Agregar Mascota</button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Especie</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(mascota => {
              return (
                <tr>
                  <td>{mascota.id}</td>
                  <td>{mascota.nombre}</td>
                  <td>{mascota.edad}</td>
                  <td>{mascota.especie}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.peticionPost()}><FontAwesomeIcon icon={faEdit} /></button>{"   "}
                    <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.insertar}>
          <ModalHeader style={{ display: 'block' }}>
            <span style={{ float: 'right' }}>X</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">Id: </label>
              <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={this.state.data.length + 1} /><br></br>
              <label htmlFor="nombre">Nombre: </label>
              <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form.nombre} /><br></br>
              <label htmlFor="edad">Edad: </label>
              <input className="form-control" type="text" name="edad" id="edad" onChange={this.handleChange} value={form.edad} /><br></br>
              <label htmlFor="especie">Especie: </label>
              <input className="form-control" type="text" name="especie" id="especie" onChange={this.handleChange} value={form.especie} /><br></br><br></br>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={()=>this.peticionPost()}>insertar</button>
            <button className="btn btn-danger" onClick={()=>this.insertar()}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
