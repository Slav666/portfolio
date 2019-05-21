import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Slav from './slav.jpg';

class Contact extends Component {
    render(){
        return(
            <div className="contact-page">
            <Grid className="contact-grid">
            <Cell cell={6}>
            <h2>Slawomir Dyk</h2>
            <img 
            src={Slav}
            alt="avatar"
            style={{height: '250px'}} />

            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
.



            </p>
            </Cell>
            <Cell cell={6}>

            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    90990009090</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    slawomirdyk@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    MyskypeId</ListItemContent>
                </ListItem>
                
            </List>
            </div>
            
            </Cell>
            </Grid>


            </div>
        )
    }
}

export default Contact;