import { Box, Chip, Container, Link as MaterialLink, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import NextLink from 'next/link'

type ServerStatus = 'running' | 'stopped'

interface MinecraftBedrockServer {
  name: string
  address: string
  serverVersion: string
  readmeHref: string
  status: ServerStatus
}

const minecraftBedrockServers: MinecraftBedrockServer[] = [
  {
    name: 'roka',
    address: 'mikoto.aoirint.com:19132',
    serverVersion: '1.19.40.02',
    readmeHref: 'minecraft-bedrock/roka/',
    status: 'stopped',
  },
  {
    name: 'aur',
    address: 'mikoto.aoirint.com:19134',
    serverVersion: '1.19.40.02',
    readmeHref: 'minecraft-bedrock/aur/',
    status: 'stopped',
  },
]

const MinecraftBedrockServersTable: React.FC<{}> = () => {
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
          {minecraftBedrockServers.map((server) => (
            <TableRow key={server.name}>
              <TableCell>{server.name}</TableCell>
              <TableCell>
                <Box sx={{
                  fontFamily: 'Monospace',
                  display: 'inline',
                  px: 1.5,
                  py: 1,
                  bgcolor: 'grey.100',
                  color: '#da1039',
                  borderRadius: 2,
                  fontSize: '0.875em',
                  fontWeight: 700,
                }}>
                  {server.address}
                </Box>
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

export default MinecraftBedrockServersTable
