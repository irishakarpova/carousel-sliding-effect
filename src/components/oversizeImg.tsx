
import React from 'react'
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './style'
import {Image} from '../components/appStateValue'

interface Props {
    currentImg:  Image | undefined
    handleClose: () => void
}

export const BigImage: React.FC<Props> = ({handleClose, currentImg}) => {
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
                    src={currentImg!.path} 
                    alt={currentImg!.label}
                />
            </div>
        </Paper>
    )

}
