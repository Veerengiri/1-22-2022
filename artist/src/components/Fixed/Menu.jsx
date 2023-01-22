import React, { useState, useEffect } from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import "../../Css/Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Menu = (props) => {
  const {islogin,setIslogin}=props;
  const location = useLocation();
  const nav = useNavigate();
  const [logout,setlogout]=useState("LogOut")

  let colTheme = document.getElementById("light-t");
  if (colTheme) {
    console.log(colTheme);
  }
  const [theme, setTheme] = useState("dark-t");
  const themeSwitch = () => {
    // console.log("light");
    if (theme === "dark-t") {
      setTheme("light-t");
    } else {
      setTheme("dark-t");
    }
  };
  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  const [menu, setMenu] = useState(false);
  var showLink = () => {
    if (menu == false) {
      console.log("vis");

      document.getElementById("Linkzz-h").style.visibility = "visible";
      document.getElementById("Linkzz-h").style.top = "0px";
      setMenu(true);
    } else {
      console.log("hid");
      document.getElementById("Linkzz-h").style.visibility = "hidden";
      document.getElementById("Linkzz-h").style.top = "-400px";

      setMenu(false);
    }
  };
  let colorInput = document.getElementById("color");
  if (colorInput) {
    colorInput.addEventListener("input", () => {
      // document.getElementById("colorVal").innerHTML = colorInput.value;
      let cl = colorInput.value;
      console.log(cl);
    });
  }
  return (
    <div id="wpr">
      <nav id="art-nav">
        <header>
          <AddCardIcon id="logo" className="gold" />
          My-ID
        </header>
        <div id="linkzz">
          <Link to="/" style={{backgroundColor:`${location.pathname=="/"?"green":"unset"}`}} >Home</Link>
          {/* <a href="#H2">About</a> */}
          <Link to="/events" style={{backgroundColor:`${location.pathname=="/events"?"green":"unset"}`}}>Events</Link>
          <Link to="/progress" style={{display:`${islogin?"unset":"none"}`,backgroundColor:`${location.pathname=="/progress"?"green":"unset"}`}}>Progress</Link>
          <Link to="/contact" style={{display:`${islogin?"unset":"none"}`,backgroundColor:`${location.pathname=="/contact"?"green":"unset"}`}}>Contact</Link>
          
          <Link to="/signIn" style={{display:`${!islogin?"unset":"none"}`,cursor:'pointer'}}>Login</Link>
          <Link to="/signUp" style={{display:`${!islogin?"unset":"none"}`,cursor:'pointer'}}>Sign Up</Link>
          <p style={{display:`${islogin?"unset":"none"}`,cursor:'pointer'}} onClick={(d)=>{
            d.preventDefault();
            setlogout("logOuting...");
            window.localStorage.clear();
            setTimeout(() => {
              setIslogin(false);
              nav("/");
            }, 1000);
          }}>{logout}</p>
        </div>
        <div id="rrr">
            <div className="nav-links tog">
              <MenuIcon id="tg" onClick={showLink} />
            </div>
            &nbsp; &nbsp; &nbsp;
            <div className="nav-links">
              <LightModeOutlinedIcon id="light" onClick={themeSwitch} />
            </div>
          </div>
      </nav>
      <div id="Linkzz-h">
          <Link to="/" style={{backgroundColor:`${location.pathname=="/"?"green":"unset"}`}} >Home</Link>
          {/* <a href="#H2">About</a> */}
          <Link to="/events" style={{backgroundColor:`${location.pathname=="/events"?"green":"unset"}`}}>Events</Link>
          <Link to="/progress" style={{display:`${islogin?"unset":"none"}`,backgroundColor:`${location.pathname=="/progress"?"green":"unset"}`}}>Progress</Link>
          <Link to="/contact" style={{display:`${islogin?"unset":"none"}`,backgroundColor:`${location.pathname=="/contact"?"green":"unset"}`}}>Contact</Link>
          
          <Link to="/signIn" style={{display:`${!islogin?"unset":"none"}`,cursor:'pointer'}}>Login</Link>
          <Link to="/signUp" style={{display:`${!islogin?"unset":"none"}`,cursor:'pointer'}}>Sign Up</Link>
          <p style={{display:`${islogin?"unset":"none"}`,cursor:'pointer'}} onClick={(d)=>{
            d.preventDefault();
            setlogout("logOuting...");
            window.localStorage.clear();
            setTimeout(() => {
              setIslogin(false);
              nav("/");
            }, 1000);
          }}>{logout}</p>
      </div>
    </div>
  );
};

export default Menu;
