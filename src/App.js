import './App.css';
import React, { Component } from 'react'
import Cardlist from './components/Card-list';
import SearchBox from './components/SearchBox';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters:user}))
  }
  render() {
    const{monsters,searchField}=this.state;
    const filteredMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      
      <div className='App'>
        <h1 className='hum'>monster</h1>
        {/* <input
        type="search"
        placeholder='Search monster'
        onChange={e=>{this.setState({searchField:e.target.value})
      }}/> */}
      <SearchBox
      placeholder='Search monster'
      Change={e=>{this.setState({searchField:e.target.value})
    }}
      />
      <Cardlist monsters={filteredMonster}></Cardlist>
      {/* {console.log(filteredMonster)} */}
      </div>
    
    )
  }
}

