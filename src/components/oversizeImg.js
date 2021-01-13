
import React from 'react'
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './style_2'


export default function BigImage({handleClose, currentImg }) {
    const classes = useStyles()();
    return (
        <Paper>
            <Fab 
                onClick = {handleClose}
                className={classes.fabClose}>
                <CloseIcon/>
            </Fab>
            <div className={classes.rootOversize}>        
                <img 
                    className={classes.oversizeImg}
                    src={currentImg.path} 
                    alt={currentImg.label}
                />
            </div>
        </Paper>
    )

}