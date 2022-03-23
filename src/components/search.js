import React, { Component } from "react";
import defaultState from "../providers/defaultState.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: defaultState,
    };
  }

  buscar(e) {
    var temporalGallery = this.state.gallery;
    var resultGallery = [];
    if (e.target.value === "") {
      this.setState({
        gallery: defaultState,
      });
    } else {
      temporalGallery.forEach(function (element) {
        element.keywords.forEach(function (keyword) {
          if (
            keyword.toLowerCase().includes(e.target.value.toLowerCase()) ||
            element.title.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            resultGallery.push(element);
          }
        });
      });
      const uniqueData = [...new Set(resultGallery)];
      this.setState({
        gallery: uniqueData,
      });
    }
  }

  render() {
    return (
      <div id="Gallery">
        {/* <h2>Search Component</h2> */}
        <div id="searchForm">
          <input
            type="text"
            placeholder="Termino a buscar"
            onChange={(e) => this.buscar(e)}
          />
        </div>
        <div id="cardGallery">
          {/** Gallery */}
          {this.state.gallery.map((image, i) => {
            return (
              <div className="card" key={i}>
                <img src={image.img} alt="Avatar" />
                <div className="container">
                  <h4>{image.title}</h4>
                  {/* <p>{image.keywords}</p> */}
                </div>
              </div>
            );
          })}
          {/** End Gallery */}
        </div>
      </div>
    );
  }
}

export default Search;
