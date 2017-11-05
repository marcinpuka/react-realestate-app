import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Listings from './Listings';
import listingsData from '../data/listingsData';

export default class Layout extends React.Component {
    constructor () {
        super();
        this.state = {
            name: 'Joe',
            listingsData, 
            min_price: 0, 
            max_price: 10000000, 
            min_floor_space: 0, 
            max_floor_space: 1000, 
            elevator: false, 
            swimming_pool: false, 
            finished_basement: false, 
            gym: false, 
            filteredData: listingsData
        };
        this.change = this.change.bind(this);
        this.filteredData = this.filteredData.bind(this);
    };

    change(event) {
        var name = event.target.name;
        var value = (event.target.type ==='checkbox') ? event.target.checked : event.target.value;

        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
            this.filteredData();
        })
    }

    filteredData() {
        var newData = this.state.listingsData.filter( (item) =>  {
            return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space;
        })
        console.log("New Data");
        console.log(newData);

        this.setState({
            filteredData: newData
        });
    }

    render () {
        console.log("render");
        console.log(this.state.filteredData);
        return (
            <div>
                <Header />
                <section id="content-area">
                    <Filter change={this.change} globalState={this.state}/>
                    <Listings listingsData={this.state.filteredData}/>
                </section>
            </div>
        );
    };
};

