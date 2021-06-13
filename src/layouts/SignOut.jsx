import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button.Group size="tiny" >
                    <Button  onClick={signIn} color='teal'>Giriş Yap</Button>
                    <Button.Or icon="info" />
                    <Button  color='teal'>Kayıt Ol</Button>
                </Button.Group>
            </Menu.Item>

        </div>
    )
}
