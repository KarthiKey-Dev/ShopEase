import { Button } from '@mui/material'
import React from 'react'
import ProfileImage from '../Components/Avatar'
import Container from '../Components/Box'

function Navbar() {
  return (
    <div>
      <Container height={200} width={'100%'} display={'flex'} padding={'10px'}>
        <ProfileImage alt={'Logo'} src="\Logo.jpg" height={100} width={100} />
      </Container> 
    </div>
  )
}

export default Navbar