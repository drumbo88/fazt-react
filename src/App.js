import React, { Component } from 'react'

//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import { tareas } from './bd.json'
import Tarea from './components/Tarea';
import FormTareas from './components/FormTareas';

class App extends Component {
  constructor() {
    super()
    this.state = {
        title: 'Aplicación de Tareas',
        tareas: tareas,
    }
  }
  handleAddTarea = (tarea) => {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }
  handleRemoveTarea = (index) => {
    if (window.confirm('¿Estás seguro de eliminar la tarea?'))
      this.setState({
        tareas: this.state.tareas.filter((tarea, i) => {
          return i !== index
        })
      })
  }
  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <Tarea tarea={tarea} key={i} onRemoveTarea={() => this.handleRemoveTarea(i)} />
      )
    })
    return (
      <div className="App">
        <Navigation title={this.state.title} tareas={tareas} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <FormTareas onAddTarea={this.handleAddTarea} />
              <p>Tírate a un pozo, chango!</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                { tareas }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
