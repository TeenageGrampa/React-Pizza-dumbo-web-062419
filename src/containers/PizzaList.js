import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    const pizzaComps = this.props.allPizzas.map(pizza => <Pizza pizza={pizza} handleEdit={this.props.handleEdit}/>)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzaComps
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
