import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/libre-franklin'

const theme = extendTheme({
  fonts: {
    heading: `'Libre Franklin Variable', sans-serif`,
    body: `'Libre Franklin Variable', sans-serif`,
  },
})

export default theme