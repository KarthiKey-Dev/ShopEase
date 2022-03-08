import { Avatar } from '@mui/material'
import React from 'react'

function ProfileImage({alt,width,height},src) {
  return (
    <div>
        <Avatar sx={{width:{width},height:{height}}}>
            <img alt={alt} src={src} />
            </Avatar>
    </div>
  )
}

export default ProfileImage