import React from 'react';
import './leftbar.scss';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import Me from '../../assets/10.jpeg';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PaletteIcon from '@mui/icons-material/Palette';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import EmailIcon from '@mui/icons-material/Email';
const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={Me} alt="" />
            <span>Stella</span>
          </div>
          <div className="item">
            <PeopleOutlineIcon />
            <span>Friends</span>
          </div>

          <div className="item">
            <GroupsIcon />
            <span>Group</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Market</span>
          </div>
          <div className="item">
            <YouTubeIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <PunchClockIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="user">
            <EventAvailableIcon />
            <span>Event</span>
          </div>
          <div className="user">
            <VideogameAssetIcon />
            <span>Gaming</span>
          </div>
          <div className="user">
            <PaletteIcon />
            <span>Art</span>
          </div>
          <div className="user">
            <VideoSettingsIcon />
            <span>Videos</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
          <div className="user">
            <EmailIcon />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
