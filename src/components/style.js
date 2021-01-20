import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = (
    width, 
    containerMaxWidth,
    containerRatio,
    iShadow,
    cShadow) => {
    return makeStyles((theme) => ({
        root: {
          height: '100%',
          width: '100vw',
        },
        app: {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            maxWidth: containerMaxWidth,
            height: '100%',
            maxHeight: `calc(${containerMaxWidth}px / ${containerRatio} )`,
            [theme.breakpoints.down('xs')]: {
                maxHeight: `calc(${width}px / ${containerRatio})`,
                maxWidth: '100%',
            },
            userSelect: 'none',
            overflow: 'hidden',
            overscrollBehaviorY: "contain",
            boxShadow: cShadow,
            borderRadius: 5,
        },
        appExt: {
            position: "absolute",
            willChange: "transform",
            width: '100%',
            padding: 20,
            [theme.breakpoints.down('xs')]: {
                padding: 0,
            },
            height: '100%',
            overflow: 'hidden',
        },
        appInt: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 50,
        },
        rootProgress: {
            width: '100%',
          },
        appIntProgress: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
            willChange: 'transform',
        },
        appProgress: {
            borderRadius: 6,
            width: 200,
        },
        imgContainer:{
            padding: 15,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            maxHeight: '100%',
            overflow: 'hidden',
            borderRadius: 4,
        },
    
        appIntImg: {
            width: "100%",
            height: 'auto',
            borderRadius: 4,
            boxShadow: iShadow,
        },
        extendedFab: {
            zIndex: 100,
            opacity: .8,
            margin: theme.spacing(6),
            [theme.breakpoints.down('xs')]: {
                margin: theme.spacing(4),
            },
        },
        extendedIcon: {
            marginLeft: theme.spacing(2),
        },
        fabClose: {
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 2002,
            margin: theme.spacing(2),
        },
        oversizeImg: {
            display: "block",
            height:'100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        rootOversize:{
            backgroundColor: '#e3e3e3',
            width: '100vw',
            height: '100vh',
            position:'absolute',
            left: 0,
            top: 0,
            zIndex: 2000,
            overflow: 'visible',
        }
    }))};

