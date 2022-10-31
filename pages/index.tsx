import { Box, Container } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import HomeNavbar from '../components/HomeNavbar'
import MinecraftJavaServersTable from '../components/MinecraftJavaServersTable'

const Home: NextPage<{}> = () => {
  return (
    <div>
      <Head>
        <title>imlgames.aoirint.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeNavbar
        title='imlgames.aoirint.com'
        subtitle='Game Servers'
      />
      <Box sx={{ mt: 3 }} />
      <Container>
        <MinecraftJavaServersTable />
      </Container>
    </div>
  )
}

export default Home
