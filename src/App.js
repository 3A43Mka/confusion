import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';


class  App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
    this.onDishSelect = this.onDishSelect.bind(this);
  }

  onDishSelect(dish) {
    console.log(dish);
    this.setState({selectedDish: dish});
  }




  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorate Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onDishSelect={this.onDishSelect} />
    </div>
  );
  }
}

export default App;
