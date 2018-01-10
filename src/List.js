import React, { Component } from 'react';


var animals = ['cat', 'dog', 'mouse'];

class List extends Component {
  render () {
    return (
      <ul>
        { animals.map((animal) => <li key={animal.toString()}>{ animal } </li>) }
      </ul>
    )
  }
}

export default List
