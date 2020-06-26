import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Button, Paper, withTheme} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import zIndex from '@material-ui/core/styles/zIndex';

function SideBar (props){
    const [selectedIndex, setSelectedIndex] = React.useState(props.Get());

    const handleListItemClick = (event, index) => {
        props.Set(index);
        setSelectedIndex(index);
    };

    const CreateButton = (text, index) =>{

        const isSelected = index === selectedIndex;

        const textStyle = isSelected?
        {
            color: 'black',
        }
        :
        {
            color: 'white',
        }

        const buttonStyle = isSelected?
        {
            backgroundColor:'white'
        }
        :
        {
            backgroundColor:'black',
            borderStyle:'solid',
            borderWidth:'1px',
            borderColor:'white'
        }

        return (
            <ListItem style={buttonStyle}
                button
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                >
                <ListItemText primary={text} style={textStyle}/>        
            </ListItem>
        );
    }
  
    return (
       <div style={{backgroundColor:'black', maxWidth:'350px', minHeight:'93vh'}}> 
           <List component="nav">
                {CreateButton('Dashboard', 0)}
                {CreateButton('Add Trips', 1)}
           </List>
           <Divider/>
           <List component="nav">
                {CreateButton('Logout', 3)}
           </List>
      </div>
    );
}

export default SideBar;
