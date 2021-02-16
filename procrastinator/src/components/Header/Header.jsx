import React from 'react';
import '../Header/Header.scss';
import logo from '../images/favicon-32x32.png';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const Header = () => {
    return (
      <>
        <header>
          <div className="title-bar">
            <div >
              <img className="title-bar__logo" src={logo} alt="ProCrastinator logo"/>
            </div>
            <div className='title-bar__nav'>
              <nav >
                <ul>
                  <li>
                    <a className="title-bar__nav-link howto"  
                        href="">How To be a Pro
                        <span className="howto-strike">
                          Crastinator
                        </span>
                    </a>       
                  </li>                                   
                  <li>
                    <a className="title-bar__nav-link settings" 
                    href="">
                      <Tooltip title = 'Settings'>
                        <SettingsOutlinedIcon/>
                      </Tooltip></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    )
}

export default Header;
