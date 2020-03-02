import React, { Component } from "react";
import Search from "./Search.js";



class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchfld: ''

        }
    }
handleSearch = (e) => {
this.setState({searchfld: e.target.value})

}

  render() {
    return (
      <div>
       <Search handleSearch={this.handleSearch}/>
     
      </div>
    );
  }
}

export default Books;