import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: this.defaultState,
    };
  }

  defaultState = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qcDJfXEtNWxaeewGXYj1TJIMOFMMHwkRwg&usqp=CAU",
      title: "Batman",
      keywords: ["dc", "heroe", "batman"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yvvB-alfJcmu5ubbq61mJeZHDJ9GCl1WcQ&usqp=CAU",
      title: "Doctor Doom",
      keywords: ["marvel", "villano", "doom"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2wMU8ZGGytfzeHT7U4fPZTcdtW2ydxUxYw&usqp=CAU",
      title: "Mistica",
      keywords: ["marvel", "villano", "mistica"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG4wRi43c3taiv-9ttrKq0117MnzsWvsFnQ&usqp=CAU",
      title: "Green Arrow",
      keywords: ["dc", "heroe", "green arrow"],
    },
    {
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Tim-Drake-uno-de-los-Robin-de-Batman-es-oficialmente-parte-de-la-comunidad-LGBT.jpg?resize=1280%2C720&quality=80&ssl=1",
      title: "Robin",
      keywords: ["dc", "heroe", "robin"],
    },
    {
      img: "https://super-ficcion.com/wp-content/uploads/2021/12/DCs-Nightwing-Filmdrehbuch-ist-eine-Ur-Rache-Geschichte2webp-780x470.webp",
      title: "NightWing",
      keywords: ["dc", "heroe", "NightWing", "Robin"],
    },
    {
      img: "https://dam.smashmexico.com.mx/wp-content/uploads/2020/09/Silk-serie-marvel-sony-pictures-plataformas-digitales-cover-770x513.jpg",
      title: "Silk",
      keywords: ["marvel", "heroe", "Silk"],
    },
  ];

  buscar(e) {
    var temporalGallery = this.state.gallery;
    var resultGallery = [];
    if (e.target.value === "") {
      this.setState({
        gallery: this.defaultState,
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
