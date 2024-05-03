import { Box, Typography, Divider, IconButton } from '@mui/material'
import React from 'react'
import { Cancel } from '@mui/icons-material';

function Drawerr() {
    
    return (
        <Box sx={{
            width: { md: '500px', xs: '50%' },
            padding: '10px'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#222', fontWeight: 700, textAlign: 'left', p: '10px 0' }} >Your card</Typography>
                <IconButton>
                    <Cancel
                        sx={{ textAlign: 'right', }} />
                </IconButton>
            </Box>

            <Divider sx={{ width: '100%', color: '#222' }} />
            <Typography sx={{ color: '#777', textAlign: 'center', mt: '40%' }}>No items found</Typography>
        </Box>
    )
}

export default Drawerr
