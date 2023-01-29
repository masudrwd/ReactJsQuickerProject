import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
   state = {
      burgerCss: 'burger-bar clicked',
      menuClass: 'menu hidden',
      isMenuClick: false,
   };

   showMenu = () => {
      if (!this.state.isMenuClick) {
         this.setState({
            burgerCss: 'burger-bar clicked',
            menuClass: 'menu hidden',
         });
      } else {
         this.setState({
            burgerCss: 'burger-bar unclicked',
            menuClass: 'menu visible',
         });
      }
      this.setState({
         isMenuClick: !this.state.isMenuClick,
      });
   };
   render() {
      return (
         <>
            <header className="bodi">
               <nav className="navbar-web">
                  <div className="burger-menu" onClick={this.showMenu}>
                     <div className={this.state.burgerCss}></div>
                     <div className={this.state.burgerCss}></div>
                     <div className={this.state.burgerCss}></div>
                  </div>
               </nav>
               <div className={this.state.menuClass}></div>
            </header>
         </>
      );
   }
}

export default Navbar;
