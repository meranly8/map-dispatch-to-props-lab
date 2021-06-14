import React, { Component } from 'react'
import { addRestaurant } from '../actions/restaurants'
import { connect } from 'react-redux'

class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            onChange={this.handleNameChange}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={this.handleLocationChange}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newRestaurant) => {
      dispatch(addRestaurant(newRestaurant))
    }
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)