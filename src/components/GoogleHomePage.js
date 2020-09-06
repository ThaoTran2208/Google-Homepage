import React, { Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './GoogleHomePage.css';
import profileImg from '../img/3.jpg';
import gmailIcon from '../img/gmail.svg';
import locationIcon from '../img/location.svg';
import translateIcon from '../img/translate.svg';
import youtube from '../img/youtube.svg';
import appIcon from '../img/app-icon.jpg';
import menuIcon from '../img/menu.svg';
import googleLogo from '../img/googlelogo.svg';
import facebookLogo from '../img/facebook.svg';
import plus from '../img/plus.svg';

class GoogleHomePage extends Component{
    constructor(props){
      super(props);
      this.inputElement = React.createRef();
    }
  
    componentDidMount(){
      this.inputElement.current.focus();
    }
    render(){
        return(
            <div className="GoogleHomePage">
                <div className="tab-bar">
                    <div className="tab codersX">
                        <div className="tab-icon">
                            <span>X</span>
                        </div>
                        <span className="tab-title">CodersX School</span>
                    </div>

                    <div className="tab new-tab active">
                        <span className="tab-title">New Tab</span>
                    </div>
                </div>

                <div className="search-bar">
                    <div className="search-bar-icon">
                        <i className="fa  fa-arrow-left"></i>
                    </div>
                    <div className="search-bar-icon">
                        <i className="fa  fa-arrow-right"></i>
                    </div>
                    <div className="search-bar-icon able">
                        <i className="fa  fa-repeat"></i>
                    </div>
                    <div className="search-bar-icon able">
                        <i className="fa  fa-home"></i>
                    </div>
                    <input className="search" type="search" placeholder="Search Google or type a URL"></input>
                    <div className="profile-img">
                        <img src={profileImg} />
                    </div>
                    <div className="search-bar-icon able">
                        <i className="fa  fa-ellipsis-v"></i>
                    </div>
                </div>

                <div className="bookmark-bar">
                    <div className="bookmark">
                        <img src={appIcon}/>
                        <span>Apps</span>
                    </div>

                    <div className="bookmark">
                        <img src={gmailIcon}/>
                        <span>Gmail</span>
                    </div>

                    <div className="bookmark">
                        <img src={youtube}/>
                        <span>Youtube</span>
                    </div>

                    <div className="bookmark">
                        <img src={translateIcon}/>
                        <span>Goole Translate</span>
                    </div>

                    <div className="bookmark">
                        <img src={locationIcon}/>
                        <span>Google Maps</span>
                    </div>
                </div>

                <div className="header">
                    <span>Gmail</span>
                    <span>Hình ảnh</span>
                    <div className="menu-icon center">
                        <img src={menuIcon}/>
                    </div>
                    <div className="account-img center">
                        <img src={profileImg} />
                    </div>
                </div>

                <div className="google-logo center">
                    <img src={googleLogo}/>
                </div>

                <div className="gg-search center">
                    <div className="search-input">
                        <i className="fa fa-search"></i>
                        <input ref={this.inputElement} type="search" placeholder="Search Google or type a URL"></input>
                    </div>
                </div>

                <div className="most-visited center">
                    <div className="most-visited-item center">
                        <div className="most-visited-item-img center">
                            <img src={facebookLogo}/>
                        </div>
                        <p>Facebook</p>
                    </div>

                    <div className="most-visited-item center">
                        <div className="most-visited-item-img center">
                            <img src={youtube}/>
                        </div>
                        <p>Youtube</p>
                    </div>

                    <div className="most-visited-item center">
                        <div className="most-visited-item-img center">
                            <img src={plus}/>
                        </div>
                        <p>Add Shortcut</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleHomePage;