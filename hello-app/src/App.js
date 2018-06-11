import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log()
        this.setState({ todos: data }, function () {
          console.log(this.state);
        })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    })
  }
  getProjects() {
    this.setState(
      {
        projects: [
          {
            id: uuid.v4(),
            title: 'Bussiness Website',
            category: 'Web Design'
          }, {
            id: uuid.v4(),
            title: 'Social app',
            category: 'Mobile development'
          }, {
            id: uuid.v4(),
            title: 'Ecomer dj',
            category: 'Web Design'
          }, {
            id: uuid.v4(),
            title: 'dad Website',
            category: 'Web Development'
          }]
      })

  }

  componentWillMount() {
    this.getTodos();
    this.getProjects();
  }
  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects })
  }

  handleDeteleProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects })
  }
  render() {
    return (
      <div className="App">

        <h1>My hello app </h1>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <h1>Project management</h1>
        <Projects projects={this.state.projects} onDelete={this.handleDeteleProject.bind(this)} />
        <hr />
        <h1>To do list date from fetch API  </h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
