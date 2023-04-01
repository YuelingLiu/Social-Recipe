import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}></Link>
        <span>RecipeReel</span>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <SoupKitchenOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <MarkunreadOutlinedIcon />
        <NotificationsIcon />
        <div className="user">
          <img src="" alt="" />
          <span>Stella</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
