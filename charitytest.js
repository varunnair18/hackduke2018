import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const API = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=13c66db4&app_key=443d1b17b656804edeef8d1dbdd40b67';

const search = '&search=Alzheimer';

const rated = '&rated=true';
const pageSize = '&pageSize=1';
const sort = '&sort=RATING%3ADESC';

const QUERY = pageSize+search+rated+sort;
{/* 
local, deductable, anonymous
  */}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
	url: "",
	name: "",
	tagline:"",
	mission:""
    };
  }

  componentDidMount() {
    fetch(API + QUERY)
	  .then(response => response.json())
	  .then(response => response[0]) 
	  .then(data => this.setState({
					url: data.websiteURL,
					name: data.charityName,
					tagline: data.tagLine,
					mission: data.mission}
				     ))
      ;
  }
 render() {
     const { mailing,url,name,tagline,mission } = this.state;

    return <div>
	 <h1> {name} </h1>
	 <h1> {url} </h1>
	 <h1> {tagline} </h1>
	 </div>;
    
  }
}

	{/* <ul>
      //   {hits.map(hit =>
      //     <li key={hit.city}>
      //       <a href={hit.url}>{hit.title}</a>
      //     </li>
      //   )}
      // </ul> */}


export default App;
