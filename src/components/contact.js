import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-page">
            <Grid className="contact-page">
            <Cell cell={6}>
            Hall Page
            </Cell>
            <Cell cell={6}>
            Hall Page
            </Cell>
            </Grid>


            </div>
        )
    }
}

export default Contact;