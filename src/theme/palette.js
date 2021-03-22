
// https://material.io/resources/color/
export const color = {
    default: '#ededed',
    darkBlue: '#10327F',
    blue: '#2F76DF',
    lightBlue: '#F8FAFD',
    white: '#FFFFFF',
    black: '#000000',
    backgroundGradient: 'linear-gradient(180deg, #F8FAFD 74.53%, #FFFFFF 107.98%) ',
    backgroundGradient2: ' linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 70%);',
    grey: '#606D7C',
    green: '#18A56B'

};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    primary: {
        main: color.darkBlue,
    },
    secondary: {
        main: color.blue,
    },
    text: {
        primary: color.darkBlue,
        secondary: color.grey,
    },
    background: {
        default: color.default,
        paper: color.lightBlue,
    },
    info: {
        main: color.black,
    },
    overlay: {
        gradients: {
            main: color.backgroundGradient,
            contrast: color.backgroundGradient2,
        },
    },
    success: {
        main: color.green
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,

}