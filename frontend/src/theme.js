import { extendTheme } from '@mui/joy/styles';
import Vazir from './assets/fonts/Vazir.ttf'
import VazirBold from './assets/fonts/Vazir-Bold.ttf'

const theme = extendTheme({
  "fontFamily": {
    display: './assets/fonts/Vazir.ttf Robotot Helvetica', // applies to `h1`–`h4`
    body: './assets/fonts/Vazir-Bold.ttf Robotot Helvetica', // applies to `title-*` and `body-*`
  },
});

export default theme;