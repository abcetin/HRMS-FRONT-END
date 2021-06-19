import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ApplyDetail from '../pages/ApplyDetail';
import JobAdDetail from '../pages/JobAdDetail';
import JobAds from '../pages/JobAds';
import JobAdForm from "../pages/JobAdForm"
import Categories from './Categories';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Route exact path="/" component={JobAds}/>
                        <Route exact path="/jobAds" component={JobAds}/>
                        <Route exact path="/jobAds/:jobPositionId" component={JobAds}/>
                        <Route exact path="/jobAdDetail/:id" component={JobAdDetail}/> 
                        <Route exact path="/appyl" component={ApplyDetail}/>
                        <Route exact path="/jobAdForm" component={JobAdForm}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
