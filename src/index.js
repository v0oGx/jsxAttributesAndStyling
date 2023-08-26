import React from "react";
import ReactDOM from "react-dom";

const randomImage = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>My Favourite images</h1>
    <img
      className="food-img"
      src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?cs=srgb&dl=pexels-vlad-alexandru-popa-1402787.jpg&fm=jpg"
    />
    <img
      className="food-img"
      src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg"
    />
    <img
      className="food-img"
      src="https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg"
    />
    <img className="food-img" src={randomImage + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
