// import {  Card, CardContent, CardMedia, Typography, Grid2 } from "@mui/material";
import "../styles/ContentGrid.css";

const items = [
  { title: "فيلا فاخرة", image: "https://via.placeholder.com/300x200" },
  { title: "كوخ على الشاطئ", image: "https://via.placeholder.com/300x200" },
  { title: "قارب سكني", image: "https://via.placeholder.com/300x200" },
  { title: "قصر حديث", image: "https://via.placeholder.com/300x200" },
  { title: "قصر حديث", image: "https://via.placeholder.com/300x200" },
  { title: "قصر حديث", image: "https://via.placeholder.com/300x200" },
  { title: "قصر حديث", image: "https://via.placeholder.com/300x200" },

];

function ContentGrid() {
  return (
    <div className="content-grid">
      {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="">
            <img
              src={item.image}
              alt={item.title}
            />
            </div>
              <h6  className="card-title">
                {item.title}
              </h6>
          </div>
      ))}
    </div>
  );
}

export default ContentGrid;
