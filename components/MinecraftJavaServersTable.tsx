import { Box, Chip, Container, Link as MaterialLink, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import NextLink from 'next/link'
import InlineCodeBox from './InlineCodeBox'

type ServerStatus = 'running' | 'stopped'

interface MinecraftJavaServer {
  name: string
  address: string
  serverType: string
  serverVersion: string
  readmeHref: string
  webMapHref?: string
  status: ServerStatus
}

const minecraftJavaServers: MinecraftJavaServer[] = [
  {
    name: 'mcpixelmon-cj',
    address: 'mikoto.aoirint.com:25575',
    serverType: 'Forge',
    serverVersion: '1.12.2',
    readmeHref: 'minecraft-java/mcpixelmon-cj/',
    webMapHref: 'https://mcpixelmon.aoirint.com/',
    status: 'running',
  },
  {
    name: 'mcbiome-cj',
    address: 'mikoto.aoirint.com:25576',
    serverType: 'Forge',
    serverVersion: '1.19.2',
    readmeHref: 'minecraft-java/mcbiome-cj/',
    webMapHref: 'https://mcbiome.aoirint.com/',
    status: 'running',
  },
  {
    name: 'roka',
    address: 'mikoto.aoirint.com:25578',
    serverType: 'Vanilla',
    serverVersion: '1.19.2',
    readmeHref: 'minecraft-java/roka/',
    status: 'stopped',
  },
  {
    name: 'aur',
    address: 'mikoto.aoirint.com:25577',
    serverType: 'Vanilla',
    serverVersion: '1.19.2',
    readmeHref: 'minecraft-java/aur/',
    status: 'stopped',
  },
]

const MinecraftJavaServersTable: React.FC<{}> = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Server Type</TableCell>
            <TableCell>Server Version</TableCell>
            <TableCell>Readme</TableCell>
            <TableCell>Web Map</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {minecraftJavaServers.map((server) => (
            <TableRow key={server.name}>
              <TableCell>{server.name}</TableCell>
              <TableCell>
                <InlineCodeBox>
                  {server.address}
                </InlineCodeBox>
              </TableCell>
              <TableCell>{server.serverType}</TableCell>
              <TableCell>{server.serverVersion}</TableCell>
              <TableCell>
                <MaterialLink component={NextLink} href={server.readmeHref}>
                  Link
                </MaterialLink>
              </TableCell>
              <TableCell>
                {server.webMapHref !== undefined ? (
                <MaterialLink component={NextLink} href={server.webMapHref}>
                  Link
                </MaterialLink>
                ) : ''}
              </TableCell>
              <TableCell>
                <Chip label={server.status == 'running' ? 'Running' : 'Stopped'} color={server.status == 'running' ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MinecraftJavaServersTable
