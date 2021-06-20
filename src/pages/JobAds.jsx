import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Icon, Grid, Header } from 'semantic-ui-react'
import JobAdService from "../services/jobAdService"

export default function JobAds() {
    let {jobPositionId} = useParams()

    const [jobAds, setjobAds] = useState([])

    useEffect(() => {
        let jobAdService = new JobAdService()
        jobAdService.getJobAds().then(result => setjobAds(result.data.data));
    },[jobPositionId])

    return (
        <div>

            {
                jobAds.map(jobAd => (

                    <Card.Group key={jobAd.id}>

                        <Card fluid >

                            <Card.Content extra >

                                <Card.Header>
                                        <Grid.Column style={{ marginTop: "0.5em" }} floated="left" width={3}>
                                            <Header as='h4'><Link to={`/jobAdDetail/${jobAd.id}`}> {jobAd.jobPosition.jobPositionName}</Link></Header>
                                        </Grid.Column>
                                        <Grid.Column style={{ marginTop: "0.5em" }} floated="right" width={3}>
                                            <Header as='h5'>{jobAd.employer.companyName} </Header>
                                        </Grid.Column>
                                </Card.Header>

                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    {jobAd.detail} <br />
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid>
                                    <Grid.Column floated="left" width={2}>
                                        <Icon name='map marker alternate' color="blue" />{jobAd.city.city}
                                    </Grid.Column>
                                    <Grid.Column textAlign="center" width={4}>
                                        <Header as='h5'>  {jobAd.minSalary} TRY  - {jobAd.maxSalary} TRY</Header>
                                    </Grid.Column>
                                    <Grid.Column floated="right" width={2}>
                                        <Icon name="users" color="green" /> {jobAd.numberOfPositionUnit}
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                ))
            }


        </div>
    )
}
