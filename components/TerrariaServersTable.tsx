import { Box, Chip, Container, Link as MaterialLink, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import NextLink from 'next/link'
import InlineCodeBox from './InlineCodeBox'

type ServerStatus = 'running' | 'stopped'

interface TerrariaServer {
  name: string
  address: string
  serverType: string
  serverVersion: string
  readmeHref: string
  status: ServerStatus
}

const terrariaServers: TerrariaServer[] = [
  {
    name: 'terraria-aur',
    address: 'mikoto.aoirint.com:17777',
    serverType: 'TShock',
    serverVersion: '1.4.3.6',
    readmeHref: 'terraria/terraria-aur/',
    status: 'running',
  },
  {
    name: 'terraria-aur2',
    address: 'mikoto.aoirint.com:17778',
    serverType: 'TShock',
    serverVersion: '1.4.3.6',
    readmeHref: 'terraria/terraria-aur2/',
    status: 'running',
  },
]

const TerrariaServersTable: React.FC<{}> = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {terrariaServers.map((server) => (
            <TableRow key={server.name}>
              <TableCell>{server.name}</TableCell>
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

export default TerrariaServersTable
