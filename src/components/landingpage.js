import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="http://media.gettyimages.com/vectors/businessman-profile-icon-man-avatar-picture-flat-design-vector-icon-vector-id543042022?s=170667a&w=1007"
            alt="avatar"
            className="avatar-img" />

            <div className="banner-text">
            <h1>Full Stack Software Developer</h1>

            <p>HTML/CSS | JavaScript | React | Ruby | Java</p>

            <div className="social-links">

            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square"  aria-hidden="true" />
            </a>

            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true" />
            </a>

            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp"  aria-hidden="true" />
            </a>

            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square"  aria-hidden="true" />
            </a>

            </div>

            </div>

            </Cell>

            </Grid>
            </div>
        )
    }
}

export default Landing;