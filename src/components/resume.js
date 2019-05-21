import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Slav from './slav.jpg';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                    src={Slav}
                    alt="avatar"
                    style={{height: '300px', width: '200px'}}/>
                    </div>
                    <h2 style={{paddingTop: '2em', textAlign: 'center'}}>Slawomir Dyk</h2>
                    <h3 style={{textAlign: 'center'}}>Full Stack Developer</h3>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>56 Drummohr Gardens Wallyford</p>
                    <h5>Phone</h5>
                    <p>9009090900</p>
                    <h5>Email</h5>
                    <p>slawomirdyk@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-rigth-col" col={8}>
                    <h2>Education</h2>
                    <Education 
                    startYear={2018}
                    endYear={2019}
                    schoolName="CodeClan Digital Skills Academy"
                    schoolDescription="Full-time, 16-week, Software Development program at CodeClan, a digital skills academy in Edinburgh. Skill

                    gained include programming languages and frameworks with the main focus on object-oriented design (ODD), test-
                    
                    driven development (TDD), user experience (UX) design and Agile practices to develop well-functioning products.
                    
                    Experience in a range of working ways - individual, pair programming, teamwork, both structured and self-directed
                    
                    learning."
                    />
                    <Education 
                    startYear={2011}
                    endYear={2012}
                    schoolName="Home Learning College"
                    schoolDescription="Completed five-year higher master’s degree studies, specialisation: food process machinery.
                    University leaving exam past with a note B.
                    Final Project: Preliminary design of fully automated hazelnut shelling machine and separator.
                    "
                    />
                    <Education 
                    startYear={1997}
                    endYear={2002}
                    schoolName="University of Life Sciences in Lublin, Poland"
                    schoolDescription="Completed five-year higher master’s degree studies, specialisation: food process machinery.
                    University leaving exam past with a note B.
                    Final Project: Preliminary design of fully automated hazelnut shelling machine and separator.
                    "
                    />
                    <Education 
                    startYear={1992}
                    endYear={1997}
                    schoolName="College of Electronic Engineering in Lublin, Poland"
                    schoolDescription="Specialisation: general electronic engineering (electronic technician)
                    Final project: DC power supply adjustable: 0-15 volt and 0-3 amp outputs. Prototype was built by myself included: making printed circuit boards, components soldering and mechanical assembly."
                    />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;