import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        /*error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text:{
            primary: '#000',
            secondary: '#fff'
        }*/
    },
});

export default theme;