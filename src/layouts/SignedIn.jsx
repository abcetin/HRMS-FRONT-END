import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {

    

    return (
        <div>
            <Menu.Item >
                <Image  avatar spaced="right"   src = "https://avatars.githubusercontent.com/u/48188046?v=4" style = {{marginTop : "0.2em" }} />
                <Dropdown pointing="top left" text="Abdullah" inline>
                    <Dropdown.Menu style={{marginLeft :"0.4em"}} >
                    <Dropdown.Item text = "Bilgilerim" icon="info"/>
                    <Dropdown.Item  as={NavLink} to="/apply" text = "Basvurularım" icon="info"/>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
