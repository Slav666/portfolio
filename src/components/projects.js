import React, { Component} from 'react';
import {Tabs, Tab, Cell, Grid, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories() {
        if(this.state.activeTab === 0 ) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Hwllo slawomir here
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
            )
        } else if(this.state.activeTab === 1){
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1>S</div>
            )
        } else if (this.state.activeTab === 3){
            return (
            <div><h1>This is MongoDb</h1></div>
            )
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={
                (tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-grid">
                <Grid className="projects-grid">
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>

                
                </section>
            }
            </div>
        )
    }
}

export default Project;