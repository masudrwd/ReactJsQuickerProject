import React, { Component } from 'react';
import './NewToggle.css';
import { Twirl as Hamburger } from 'hamburger-react';

export class NewToggle extends Component {
   state = {
      show: 'nav nav-hide',
   };

   Click = (event) => {
      if (event) {
         this.setState({ show: 'nav nav-show' });
      } else {
         this.setState({ show: 'nav nav-hide' });
      }
   };

   render() {
      return (
         <React.Fragment>
            <div className="bodyDiv">
               <Hamburger
                  size={100}
                  color={'white'}
                  onToggle={this.Click}
                  rounded
               />
            </div>
            <div className={this.state.show}>I am Menu</div>
         </React.Fragment>
      );
   }
}

export default NewToggle;
