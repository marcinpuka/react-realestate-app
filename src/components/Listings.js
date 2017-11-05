import React from 'react';

export default class Listings extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Joe'
        };
        this.loopListings = this.loopListings.bind(this);
    };
    loopListings () {
        var {listingsData} = this.props;
        console.log("Listings js");
        console.log(listingsData);
        if(listingsData == undefined ||listingsData.length == 0) {
            return "sorry"
        } 

    return listingsData.map( (listing, index)=> {
        return (        
        <div className="col-md-3" key={index}>
        <div className="listing" >
            <div className="listing-img"             
                style={{
                    background: `url("${listing.image}") 
                                no-repeat 
                                center center`
                }}>
                <span className="address">{listing.address}</span>
                <div className="details">
                    <div className="col-md-3">
                        <div className="user-img"></div>
                    </div>
                    <div className="col-md-9">
                        <div className="user-details">
                            <span className="user-name">Nina Smith</span>
                            <span className="post-date">05/05/2017</span>
                        </div>
                        <div className="listing-details">
                            <div className="floor-space">
                                <i className="fa fa-square-o" aria-hidden="true"></i>
                                <span>120 m&sup2;</span>
                            </div>
                            <div className="bedrooms">
                                <i className="fa fa-bed" aria-hidden="true"></i>
                                <span>{listing.rooms} bedrooms</span>
                            </div>
                        </div>
                        <div className="view-btn">
                            View Listing
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom-info">
                <span className="price"> ${listing.price} </span>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>
                    {listing.city}, {listing.state} </span>
            </div>
        </div>
    </div>)
    })
    }

    render() {
        return (
            <section id="listings">
                <section className="search-area">
                    <input type="text" name="search" />
                </section>
                <section className="sortby-area">
                    <div className="results">390 results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby" onChange={this.props.change}>
                            <option value="price-asc">Lowest Price </option>
                            <option value="price-dsc">Highest Price </option>
                        </select>
                        <div className="view">
                            <i className="fa fa-th-list" aria-hidden="true"></i>
                            <i className="fa fa-th" aria-hidden="true"></i>
                        </div>
                    </div>
                </section>

                <section className="listings-results">
                    {this.loopListings()}
                </section>
                <section id="pagination">
                    <ul className="pages">
                        <li>Prev</li>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>Next</li>
                    </ul>
                </section>
            </section>
        );
    };
};

