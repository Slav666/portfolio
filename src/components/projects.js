import React, { Component} from 'react';
import {Tabs, Tab, Cell, Grid, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Background from './Collage_Fotor2.jpg'
import Background1 from './Collage_Fotor6.jpg'
import Background2 from './Collage_Fotor5.jpg'
import Background3 from './Collage_Fotor3.jpg'
import Background4 from './Collage_Fotor4.jpg'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories() {
        if(this.state.activeTab === 0 ) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: '500px', margin: 'auto'}}>
                
                <CardTitle style={{color: 'black', height: '450px', background: `url(${Background}) center / cover`}}>React Project #0</CardTitle>
                <CardText>
                The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential
                new owners for animals and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal
                to be adopted or to be added to the quarantine list. During this project, I’ve improved my knowledge about object-oriented programming (Ruby), Web programming (Rest, MVC). I’ve learnt how to use Sinatra framework and how to interact with a PostgreSQL database (CRUD).
                </CardText>
                <CardActions>
                <Button>Github</Button>
                <Button>CodePen</Button>
                <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '500px', margin: 'auto'}}>
                
                <CardTitle style={{color: 'black', height: '450px', background: `url(${Background2}) center / cover`}}>React Project #0</CardTitle>
                <CardText>
                    The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential
                    new owners for animals and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal
                        to be adopted or to be added to the quarantine list. During this project, I’ve improved my knowledge about object-oriented programming (Ruby), Web programming (Rest, MVC). I’ve learnt how to use Sinatra framework and how to interact with a PostgreSQL database (CRUD).
                </CardText>
                <CardActions>
                <Button>Github</Button>
                <Button>CodePen</Button>
                <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '500px', margin: 'auto'}}>
                
                <CardTitle style={{color: 'black', height: '450px', background: `url(${Background1}) center / cover`}}>React Project #0</CardTitle>
                <CardText>
                The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential
                new owners for animals and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal
                to be adopted or to be added to the quarantine list. During this project, I’ve improved my knowledge about object-oriented programming (Ruby), Web programming (Rest, MVC). I’ve learnt how to use Sinatra framework and how to interact with a PostgreSQL database (CRUD).
                </CardText>
                <CardActions>
                <Button>Github</Button>
                <Button>CodePen</Button>
                <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '500px', margin: 'auto'}}>
                
                <CardTitle style={{color: 'black', height: '450px', background: `url(${Background3}) center / cover`}}>React Project #0</CardTitle>
                <CardText>
                The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential
                new owners for animals and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal
                to be adopted or to be added to the quarantine list. During this project, I’ve improved my knowledge about object-oriented programming (Ruby), Web programming (Rest, MVC). I’ve learnt how to use Sinatra framework and how to interact with a PostgreSQL database (CRUD).
                </CardText>
                <CardActions>
                <Button>Github</Button>
                <Button>CodePen</Button>
                <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '500px', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '450px', background: `url(${Background4}) center / cover`}}>React Project #0</CardTitle>
                <CardText>
                The Scottish Animal Shelter is a management system to keep track of their animals and owners. The shelter has a list of potential
                new owners for animals and owners who have already adopted animals. A user can add a new owner to the list, can add a new animal
                to be adopted or to be added to the quarantine list. During this project, I’ve improved my knowledge about object-oriented programming (Ruby), Web programming (Rest, MVC). I’ve learnt how to use Sinatra framework and how to interact with a PostgreSQL database (CRUD).
                </CardText>
                <CardActions>
                <Button>Github</Button>
                <Button>CodePen</Button>
                <Button>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={
                (tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>Solo Project</Tab>
                <Tab>Group Project</Tab>
                </Tabs>
                <Grid >
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>

                
                
            }
            </div>
        )
    }
}

export default Project;