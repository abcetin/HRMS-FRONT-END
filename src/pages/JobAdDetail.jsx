import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Image, Item, Label } from 'semantic-ui-react'
import JobAdService from '../services/jobAdService'

export default function JobAdDetail() {
    let { id } = useParams()


    const [jobAd, setjobAd] = useState({})

    useEffect(() => {
        let jobAdService = new JobAdService()
        jobAdService.getJobDetail(id).then(result => setjobAd(result.data.data))
        
    },[id])
    
    return (
        <div>
            <Grid>
                    <Grid.Column width={4}>
                        <Image size="big" circular src='https://cdn.dribbble.com/users/1365713/screenshots/6870549/7w_logo_2_4x.png?compress=1' />
                    </Grid.Column>
                    <Grid.Column width={12} textAlign="left" style={{marginTop:"0.5em"}}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header as='a' style={{marginBottom:"2em"}}>{jobAd.detail}</Item.Header>
                                    <Item.Meta>
                                        <span className='cinema'>Şirket İsmi</span>
                                    </Item.Meta>
                                    <Item.Description>Açıklama</Item.Description>
                                    <Item.Extra>
                                        <Label>Şirket Sitesi</Label>
                                        <Label icon='globe' content='Additional Languages' />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
            </Grid>

        </div>
    )
}
