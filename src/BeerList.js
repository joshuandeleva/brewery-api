import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Axios from "axios"
function BeerList() {
const [beers, setbeers] =useState([]);
	
	useEffect(() => {
		Axios.get(`https://api.punkapi.com/v2/beers/`)
            .then(res => {
                setbeers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
	},)
	return (
		<div className="App">
			<Header />
			<div className="beerList">
				{beers.map(beer => <span key={beer.id}>{beer.name}</span>)}
			</div>
			<div className="beerimage">
				{beers.map(beer => <img  key={beer.id} alt={beer.method} src={beer.image_url} />)}
			</div>
		</div>
	);

}

export default BeerList

