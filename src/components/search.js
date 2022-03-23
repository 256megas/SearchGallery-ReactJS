import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [
        {
          img: "https://www.w3schools.com/howto/img_avatar.png",
          title: "Foto Hombre",
          keywords: ["foto", "hombre"],
        },
        {
          img: "https://www.w3schools.com/howto/img_avatar2.png",
          title: "Foto Mujer",
          keywords: ["foto", "mujer"],
        },
      ],
      search: [],
    };
  }

  render() {
    return (
      <div id="Gallery">
        <h2>Search Component</h2>
        <div id="cardGallery">
          {/** Every Card */}
          {/* <div className="card">
            <img src={img_avatar} alt="Avatar" />
            <div className="container">
              <h4>John Doe</h4>
              <p>Architect & Engineer</p>
            </div>
          </div> */}
          {/** End Every Card */}
          {console.log(this.state.gallery)}
          {/** Gallery */}
          {this.state.gallery.map((image, i) => {
            console.log(image);
            return (
              <div className="card">
                <img src={image.img} alt="Avatar" />
                <div className="container">
                  <h4>{image.title}</h4>
                  <p>{image.keywords}</p>
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
