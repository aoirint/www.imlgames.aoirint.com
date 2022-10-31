import { Box, Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import ArkServersTable from '../components/ArkServersTable'
import HomeNavbar from '../components/HomeNavbar'
import MinecraftBedrockServersTable from '../components/MinecraftBedrockServersTable'
import MinecraftJavaServersTable from '../components/MinecraftJavaServersTable'
import TerrariaServersTable from '../components/TerrariaServersTable'

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
        <Typography variant='h5' component='h3'>
          Minecraft（Java版）
        </Typography>
        <Box sx={{ mt: 2 }} />
        <MinecraftJavaServersTable />
        <Box sx={{ mt: 4 }} />
        <Typography variant='h5' component='h3'>
          Minecraft（Bedrock版）
        </Typography>
        <Box sx={{ mt: 2 }} />
        <MinecraftBedrockServersTable />
        <Box sx={{ mt: 4 }} />
        <Typography variant='h5' component='h3'>
          ARK: Survival Evolved
        </Typography>
        <Box sx={{ mt: 2 }} />
        <ArkServersTable />
        <Box sx={{ mt: 4 }} />
        <Typography variant='h5' component='h3'>
          Terraria
        </Typography>
        <Box sx={{ mt: 2 }} />
        <TerrariaServersTable />
        <Box sx={{ mt: 6 }} />
      </Container>
    </div>
  )
}

export default Home
