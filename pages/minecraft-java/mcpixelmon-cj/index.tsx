
import { Box, Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import ChildNavbar from '../../../components/ChildNavbar'

const McPixelmonCjPage: NextPage<{}> = () => {
  return (
    <div>
      <Head>
        <title>imlgames.aoirint.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChildNavbar
        title='mcpixelmon-cj'
        subtitle='Minecraft Java版ゲームサーバ'
        backButtonHref='/'
      />
      <Box sx={{ mt: 3 }} />
      <Container>
        <Typography variant='h4' component='h2' sx={{ mb: 2 }}>
          参加方法
        </Typography>
        <Typography variant='body1'>
          1. あああ
        </Typography>
        <Typography variant='body1'>
          2. いいい
        </Typography>
      </Container>
    </div>
  )
}

export default McPixelmonCjPage
