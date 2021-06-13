import React, { useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {  Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthanticated, setIsAuthanticated] = useState(false)
    const history =  useHistory()
    function handleSignOut(params) {
        setIsAuthanticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthanticated(true)
    }
    return (
        <div>
            <Menu  fixed="top" inverted color='teal' >
                <Container>
                    
                    <Menu.Item as={NavLink} to="/" color="teal"  to="/" name='HRMS' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {isAuthanticated?<SignedIn signOut={handleSignOut}/>:<SignOut signIn={handleSignIn}/>}
                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
    )
}
