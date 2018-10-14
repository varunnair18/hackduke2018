import React, { Component } from 'react';
import './App.css';

const API = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=13c66db4&app_key=443d1b17b656804edeef8d1dbdd40b67';

const rated = '&rated=true';
const pageSize = '&pageSize=1';
const sort = '&sort=RATING%3ADESC';
{/* 
local, deductable, anonymous
 */}

const QUERY = pageSize+rated+sort+'&search=';

const search = ['alzheimer', 'congenital', 'orphan', 'veteran', 'daddy'];

class App extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
	url: [],
	name: [],
	tagLine:[],
	mission:[],
    };
  }

    componentDidMount() {

	for (var i = 0; i < search.length; i++) {
	    
	    fetch(API + QUERY+search[i])
		.then(response => response.json())
		.then(response => response[0]) 
		.then(data => this.setState({
		    url: this.state.url.concat([data.websiteURL]),
		    name: this.state.name.concat([data.charityName]),
		    tagLine: this.state.tagLine.concat([data.tagLine]),
		    mission: this.state.mission.concat([data.mission])}));

	}

    }



      render() {

	  var lis = [];
	  for (var i = 0; i < search.length; i++) {
	      lis.push(
		  		  <div>
	      <h1> {this.state.name[i]} </h1>
	      <h1> <a href={this.state.url[i]}> Website </a> </h1>
	      <h1> {this.state.tagLine[i]} </h1> <br/>
		      </div>
	      )
	  }
	  return (lis);

	  

  }
}






export default App;
