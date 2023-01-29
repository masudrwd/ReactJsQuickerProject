import React, { Component } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import './FinalNavBar.css';

const Link = (props) => {
   return (
      <a href={props.href} className={props.clssName}>
         {props.inValue}
      </a>
   );
};

export class FinalNavBar extends Component {
   state = {
      navShowHide: 'navs unclicked',
   };

   ToggleHamber = (event) => {
      if (event) {
         this.setState({ navShowHide: 'navs clicked' });
      } else {
         this.setState({ navShowHide: 'navs unclicked' });
      }
   };

   render() {
      return (
         <React.Fragment>
            <header className="nav-header">
               <div className="nav-body">
                  <div className="content">
                     <div className="logos">
                        <Link href="/" className="logolink" inValue="LOGO" />
                     </div>
                     <nav className={this.state.navShowHide}>
                        <ul>
                           <li>
                              <Link
                                 href="/"
                                 className="nav-links"
                                 inValue="Home"
                              />
                           </li>
                           <li>
                              <Link
                                 href="/"
                                 className="nav-links"
                                 inValue="About"
                              />
                           </li>
                           <li>
                              <Link
                                 href="/"
                                 className="nav-links"
                                 inValue="Contact"
                              />
                           </li>
                           <li>
                              <Link
                                 href="/"
                                 className="nav-links"
                                 inValue="Blog"
                              />
                           </li>
                        </ul>
                     </nav>
                     <div className="nav-humburger">
                        <Hamburger
                           color={'white'}
                           size={30}
                           duration={0.5}
                           rounded
                           onToggle={this.ToggleHamber}
                        />
                     </div>
                  </div>
               </div>
            </header>
         </React.Fragment>
      );
   }
}

export default FinalNavBar;
