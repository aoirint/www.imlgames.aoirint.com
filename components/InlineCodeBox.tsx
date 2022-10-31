import { Box } from "@mui/material"

interface InlineCodeBoxProps {
  children: React.ReactNode
}

const InlineCodeBox: React.FC<InlineCodeBoxProps> = ({
  children,
}) => {
  return (
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
      {children}
    </Box>
  )
}

export default InlineCodeBox
