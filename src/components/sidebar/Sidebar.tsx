import "./Sidebar.scss";
import youtubeLogo from "../../assets/youtube.png";
import instagramLogo from "../../assets/instagram.png";
import tiktokLogo from "../../assets/tiktok.png";
import twitterLogo from "../../assets/twitter.png";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </div>
        <div className="serverIcon">
          <img src={instagramLogo} alt="Instagram Logo" />
        </div>
        <div className="serverIcon">
          <img src={googleLogo} alt="Instagram Logo" />
        </div>
        <div className="serverIcon">
          <img src={tiktokLogo} alt="TikTok Logo" />
        </div>
        <div className="serverIcon">
          <img src={twitterLogo} alt="Twitter Logo" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={appleLogo} alt="Apple Logo" />
              <div className="accountName">
                <h4>testUser</h4>
                <span>#8162</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
