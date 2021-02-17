import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Header/Header.scss';
import logo from '../images/favicon-32x32.png';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const Header = () => {
    return (
      <>
        <header>
          <div className="title-bar">
           
          <Link to="/">
            <img className="title-bar__logo" src={logo} alt="ProCrastinator logo"/>
            </Link>             
                    {/* <a className="title-bar__nav howto"  
                        href="/howto">How To be a Pro
                        <span className="howto-strike">
                          Crastinator
                        </span> 
                    </a>   */}

                  <Link to="/howto" className="title-bar__nav howto" >How To be a Pro
                        <span className="howto-strike">
                          Crastinator
                        </span> </Link>

                    <a className="title-bar__nav settings" 
                    href="">
                      <Tooltip title = 'Settings'>
                        <SettingsOutlinedIcon/>
                      </Tooltip>
                    </a>
          </div>
        </header>
      </>
    )
}

export default Header;
