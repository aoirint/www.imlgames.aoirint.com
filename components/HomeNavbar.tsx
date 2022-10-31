import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'

export interface HomeNavbarProps {
  title: string
  subtitle?: string
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h1">
              {title}
            </Typography>
            {subtitle !== undefined ? (
              <Typography variant="subtitle2" component="h2">
                {subtitle}
              </Typography>
            ) : ''}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HomeNavbar
