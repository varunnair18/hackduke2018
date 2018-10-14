import React, { Component } from 'react';
import './App.css';

const API = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=13c66db4&app_key=443d1b17b656804edeef8d1dbdd40b67';
const rated = '&rated=true';
const pageSize = '&pageSize=1';
const sort = '&sort=RATING%3ADESC';

const QUERY = pageSize+rated+sort+'&search=';


const search = ['alzheimer', 'congenital', 'orphan', 'veteran', 'daddy'];
{/* 
local, deductable, anonymous
  */}
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
    fetch(API + QUERY+search[0])
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
	      url: this.state.url.concat([data.websiteURL]),
	      name: this.state.name.concat([data.charityName]),
	      tagLine: this.state.tagLine.concat([data.tagLine]),
	      mission: this.state.mission.concat([data.mission])}));
	      
	  fetch(API+QUERY+search[1])
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
	      url: this.state.url.concat([data.websiteURL]),
	      name: this.state.name.concat([data.charityName]),
	      tagLine: this.state.tagLine.concat([data.tagLine]),
	      mission: this.state.mission.concat([data.mission])}));
      
      	  fetch(API+QUERY+search[2])
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
	      url: this.state.url.concat([data.websiteURL]),
	      name: this.state.name.concat([data.charityName]),
	      tagLine: this.state.tagLine.concat([data.tagLine]),
	      mission: this.state.mission.concat([data.mission])}));
      
	  fetch(API+QUERY+search[3])
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
	      url: this.state.url.concat([data.websiteURL]),
	      name: this.state.name.concat([data.charityName]),
	      tagLine: this.state.tagLine.concat([data.tagLine]),
	      mission: this.state.mission.concat([data.mission])}));
      
	  fetch(API+QUERY+search[4])
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
	      url: this.state.url.concat([data.websiteURL]),
	      name: this.state.name.concat([data.charityName]),
	      tagLine: this.state.tagLine.concat([data.tagLine]),
	      mission: this.state.mission.concat([data.mission])}));

  }

    
      render() {
	  
     const {url,name,tagLine,mission} = this.state;

	  return ([
		  <div>
	      <h1> {name[0]} </h1>
	      <h1> <a href={url[0]}> Website </a> </h1>
	      <h1> {tagLine[0]} </h1> <br/>
	      </div>,
	      
	      <div1>
	      <h1> {name[1]} </h1>
	      <h1> <a href={url[1]}> Website </a> </h1>
	      <h1> {tagLine[1]} </h1> <br/>
		  </div1>,

	      	      <div2>
	      <h1> {name[2]} </h1>
	      <h1> <a href={url[2]}> Website </a> </h1>
	      <h1> {tagLine[2]} </h1> <br/>
		  </div2>,

	      	      <div3>
	      <h1> {name[3]} </h1>
	      <h1> <a href={url[3]}> Website </a> </h1>
	      <h1> {tagLine[3]} </h1> <br/>
		  </div3>,

	      	      <div4>
	      <h1> {name[4]} </h1>
	      <h1> <a href={url[4]}> Website </a> </h1>
	      <h1> {tagLine[4]} </h1> <br/>
		  </div4>

	     ]);

  }
}






export default App;
