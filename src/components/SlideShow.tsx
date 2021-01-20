import React, { useRef, useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { useSprings } from 'react-spring'
import { useStyles } from './style'
import clamp from 'lodash-es/clamp'
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import useWindowDimensions from './utils/getScreen'
import AnimatedPicture from './AnimatedPicture';
import { BigImage } from './oversizeImg'
import { AppStateValue } from './appStateValue';
import { getShadowContainer, getShadowImage } from './utils/getShadow'
import { getViewerSize } from './utils/getViewerSize'
import { Image } from './appStateValue'

const SlideShow: React.FC<AppStateValue> = (props) =>  {

    const index = useRef(0);
    
    const { serverData,
            containerMaxWidth, 
            containerRatio,
            containerShadow,
            imageShadow,
            showNextPrev 
        } = props;  

    const width = useWindowDimensions();
    const viewerSize = getViewerSize(showNextPrev, width, containerMaxWidth)
    let cShadow = getShadowContainer(containerShadow)
    let iShadow = getShadowImage(imageShadow)
    const [ind, setInd] = React.useState(0)

    const classes = useStyles(
        width, 
        containerMaxWidth,
        containerRatio,
        iShadow,
        cShadow)();
        
    const getImages = () => {
        const data = Object.values(serverData);
        return data;
    }

    const [image, setImage] = useSprings(
        getImages().length, i => ({ 
            x: i * viewerSize, 
            scale: 1, 
            display: 'block' 
        }))
    
    
    const bind = useDrag((
    { active, movement: [mx], direction: [xDir], distance, cancel}) => {
        if (active && distance > viewerSize / 3){
            index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length  - 1)
            cancel()
        }
            setImage((i) => {
                if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
                const x = (i - index.current) * viewerSize + (active ? mx : 0)
                const scale = active ? 1 - distance / viewerSize / 2  : 1
                return { x, scale, display: 'block' }
            })
        setInd(index.current)
    })

    const [currentImg, setCurrentImg] = useState<Image>()
    const [isOpenCurrentImg, setIsOpenCurrentImg] = useState(false)  

    const handleClick = (currentI: {id: string, label: string, path: string}) => {
        setCurrentImg(currentI)    
        setIsOpenCurrentImg(true)
    }
    const handleClose = () => {
        setIsOpenCurrentImg(!isOpenCurrentImg)
    }

    const data = getImages();

    return(
        <React.Fragment>
            {isOpenCurrentImg && 
                <BigImage 
                    currentImg={currentImg}
                    handleClose={handleClose}
                />
            }
            <div className={classes.app}>
                <Fab 
                    className={classes.extendedFab} 
                    aria-label="info" 
                    variant="extended"  
                    size= {width > 600 ? 'large': 'small'}
                    onClick={ () => { handleClick(data[ind])} }>
                        {`${ind + 1}  / ${data.length}`}
                    <AspectRatioIcon className={classes.extendedIcon} />
                </Fab>
                {image.map(({ x, display, scale }, i) => (
                    i < ind + 2 ? (
                        <AnimatedPicture 
                            i = {i}
                            x = {x}
                            data = {data}
                            scale = {scale}
                            new_data = {data}
                            new_bind = {bind} 
                            display = {display}
                        />
                    ): null
                ))}
            </div>
        </React.Fragment>
    )
}
export default SlideShow;

