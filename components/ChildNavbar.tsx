import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'

export interface ChildNavbarProps {
  title: string
  subtitle?: string
  backButtonHref: string
}

const ChildNavbar: React.FC<ChildNavbarProps> = ({
  title,
  subtitle,
  backButtonHref,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            href={backButtonHref}
          >
            <ArrowBackIcon />
          </IconButton>
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

export default ChildNavbar
