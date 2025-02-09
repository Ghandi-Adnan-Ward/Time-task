/* eslint-disable no-unused-vars */
import {  Toolbar, Typography, IconButton, TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/Header.css";
import LanguageIcon from '@mui/icons-material/Language';
function Header() {
  return (
    <div className="header">
      <Toolbar className="toolbar">
        {/* شعار الموقع */}
        <Typography variant="h6" className="logo">
          Airbnb
        </Typography>

        <div className="diss">
      <button className="bb">الإقامات</button>
      <button className="bb">تجارب السفر</button>
      </div>

        {/* <Box className="search-bar">
          <TextField
            variant="outlined"
            placeholder="ابحث عن وجهات"
            size="small"
            className="search-input"
          />
          <IconButton className="search-button">
            <SearchIcon />
          </IconButton>
        </Box> */}

        {/* أيقونات الحساب والقائمة */}
       <div className="dis">
        <button className="b">اعرض مسكنك على Airbnb</button>
        <LanguageIcon className="ic" fontSize="small"/>
       <div className="header-icons">
            <MenuIcon fontSize="small" className="icon" />
            <AccountCircleIcon fontSize='large' className="icon" />
        </div>
       </div>
      </Toolbar>
    </div>
  );
}

export default Header;
