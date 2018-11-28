import React from 'react';
import 'typeface-roboto';
import Drawer from './components/drawer/ResponsiveDrawer';

class AppDesktop extends React.Component{
  render(){
    return (

      <div>
            <Drawer>
            {this.props.children}
          </Drawer>
      </div>
    );
  }
}


export default AppDesktop;
