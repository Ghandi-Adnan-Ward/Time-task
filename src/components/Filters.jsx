import { Box } from "@mui/material";
import "../styles/Filters.css";

function Filters() {
  const categories = [
    "أسماء أيقونية",
    "الشاطئ",
    "قوارب",
    "قصور",
    "بيوت على الأشجار",
    "إطلالات خلابة",
  ];

  return (
    <Box className="filters">
      {categories.map((category) => (
        <button key={category} className="filter-button">
          {category}
        </button>
      ))}
    </Box>
  );
}

export default Filters;
