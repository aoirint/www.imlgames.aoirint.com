import { Box, Chip, Container, Link as MaterialLink, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import NextLink from 'next/link'
import InlineCodeBox from './InlineCodeBox'

type ServerStatus = 'running' | 'stopped'

interface ArkServer {
  name: string
  address: string
  serverVersion: string
  readmeHref: string
  status: ServerStatus
}

const arkServers: ArkServer[] = [
  {
    name: 'ark-aur',
    address: 'mikoto.aoirint.com:7777,7778,27015',
    serverVersion: '9382229 (2022-08-25)',
    readmeHref: 'ark/ark-aur/',
    status: 'stopped',
  },
]

const ArkServersTable: React.FC<{}> = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Server Version</TableCell>
            <TableCell>Readme</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arkServers.map((server) => (
            <TableRow key={server.name}>
              <TableCell>{server.name}</TableCell>
              <TableCell>
                <InlineCodeBox>
                  {server.address}
                </InlineCodeBox>
              </TableCell>
              <TableCell>{server.serverVersion}</TableCell>
              <TableCell>
                <MaterialLink component={NextLink} href={server.readmeHref}>
                  Link
                </MaterialLink>
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

export default ArkServersTable
