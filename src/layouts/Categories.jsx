import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import JobPositionService from "../services/jobPositionService"

export default function Categories() {

    const [jobPositions, setjobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getAll().then(result => setjobPositions(result.data.data));
    })

    return (
        <div>
            {
                jobPositions.map(jobPosition => (
                    <Menu pointing secondary vertical key={jobPosition.jobPositionId}>

                        <Menu.Item><Link to={`/jobAds/${jobPosition.jobPositionId}`}> {jobPosition.positionName}</Link></Menu.Item>
                    </Menu>
                ))
            }
        </div>
    )
}
