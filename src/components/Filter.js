import React from 'react';

export default class Filter extends React.Component {
    constructor () {
        super();
        this.state = {
        };
        //this.cities = this.cities.bind(this);
        // this.bedrooms =this.bedrooms.bind(this);
    };
    componentWillMount(){
        this.props.populateAction();
    };

    cities (){
        if(this.props.globalState.populateFormsData.cities != undefined) {
            var {cities } = this.props.globalState.populateFormsData;
            return cities.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            });
        }
    }
    homeType(){
        if(this.props.globalState.populateFormsData.homeTypes != undefined) {
            var {homeTypes } = this.props.globalState.populateFormsData;
            console.log(homeTypes);
            return homeTypes.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            });
        }
    }
    bedrooms(){
        if(this.props.globalState.populateFormsData.bedrooms != undefined) {
            var {bedrooms } = this.props.globalState.populateFormsData;
            console.log(bedrooms);
            return bedrooms.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            });
        }
    }
    render () {
        return (
            <section id="filter">
                <div className="inside">
                <h4>Filter</h4>
                <label htmlFor="city" className="filters_city">District</label>
                <select name="city" className="filters city" onChange={this.props.change}>
                    <option value="All">All</option>
                    {this.cities()}
                </select>
                <label htmlFor="homeType" className="filters_type">Type</label>
                <select name="homeType" className="filters homeType" onChange={this.props.change}>
                    <option value="All">All </option>
                    {this.homeType()}
                </select>
                <label htmlFor="bedrooms" className="filters_bedrooms">Bedrooms</label>
                <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
                    <option value="0">Show All</option>
                    {this.bedrooms()}
                </select>
                <div className="filters price">
                    <span className="title">Price</span>
                    <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
                    <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
                </div>
                <div className="filters floor-space">
                    <span className="title">Floor Space</span>
                    <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
                    <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
                </div>
                <div className="filters extras">
                    <span className="title">
                        Extras
                    </span>
                    <label htmlFor="extras">
                        <span> Elevator </span>
                        <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
                    </label>
                    <label htmlFor="extras">
                        <span> Wardrobe Room </span>
                        <input name="wardrobe" value="wardrobe" type="checkbox" onChange={this.props.change}/>
                    </label>
                    <label htmlFor="extras">
                        <span>Balcony </span>
                        <input name="balcony" value="balcony" type="checkbox"onChange={this.props.change}/>
                    </label>
                    <label htmlFor="extras">
                        <span> Garage </span>
                        <input name="garage" value="garage" type="checkbox" onChange={this.props.change}/>
                    </label>
                </div>
                </div>
            </section>    
        );
    };
};

