import React, { Component } from 'react';
import ItemsStock from "./services/itemsStock.json";
import ItemCard from "./components/ItemCard";
import Header from "./components/header";
import NavBar from "./components/navBar";


import './style.css';
import './App.css';

class App extends Component {
  state = {
    data: [],
    showPopup: false,
    counters: [

    ]

  }

  componentDidMount() {
    this.setState({ data: ItemsStock })

  }
  handleCounter = (counterId) => {
    var shouldAddCounter = true;
    const newCounters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value++;
        shouldAddCounter = false;
        return { ...c };
      }
      return c;
    });
    if (shouldAddCounter) {
      newCounters.push({
        id: counterId,
        value: 1
      })
    }
    this.setState({ counters: newCounters });

  }

  handleCounterDecrement = (counterId) => {

    const newCounters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value--;
        return { ...c };
      }
      return c;
    }
    ).filter(c => c.value !== 0);



    this.setState({ counters: newCounters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  getQuantity = (id) => {
    const counter = this.state.counters.find(c => c.id === id);

    return counter;

  }
  togglePopup = () => {

    this.setState({ showPopup: !this.state.showPopup });
  }

  getTotalQuantity = () => {
    var total = 0;
    this.state.counters.map(c => {
      total = total + c.value;

    })
    return total;
  }

  getItems = () => {
    var items = []
    for (let i = 0; i < this.state.counters.length; i++) {
      const item = this.state.data.find(d => d.id === this.state.counters[i].id)
      const itemData = { ...item, ...this.state.counters[i] };
      items.push(itemData);

    }
    // const itemData = this.state.counters.map(c => {
    //   const item = this.state.data.find(d => d.id === c.id);
    //   return {
    //     ...c,
    //     ...item
    //   }
    // })

    return items;
  }

  getGrandTotal = () => {
    var grandTotal = 0;
    this.state.data.map(d => {
      const total = d.value * d.price;
      grandTotal = grandTotal + total;
    })
    return grandTotal;
  }



  render() {
    return (
      <React.Fragment>
        <Header
          togglePopup={this.togglePopup}
          showPopupStatus={this.state.showPopup}
          totalQuantity={this.getTotalQuantity()}
          itemsData={this.getItems()}
          counterDecrement={this.handleCounterDecrement}
          counterIncrement={this.handleCounter}
          handleDelete={this.handleDelete}
          getGrandTotal={this.getGrandTotal()}
        />

        <NavBar />

        <div className="container">

          {this.state.data.map(item =>
            <ItemCard
              key={item.id}
              item={item}
              onClick={this.handleCounter}
              counter={this.getQuantity(item.id)}

            />

          )}
        </div>
      </React.Fragment>
    );
  }
}



export default App;
