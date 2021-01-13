import React, { useRef, useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated } from 'react-spring'
import {useStyles} from './style'
import clamp from 'lodash-es/clamp'
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import useWindowDimensions from './utils/getScreen'

const SlideShow = (props) =>  {

    const index = useRef(0);
    
    const { serverData,
            containerMaxWidth, 
            containerRatio,
            containerShadow,
            imageShadow,
            showNextPrev 
        } = props;  

    const width = useWindowDimensions();
    
    const getShadowContainer = ()  => {
        let contShadow = (containerShadow === true) 
            ? "0 10px 25px -20px rgba(0, 0, 0, 0.6)" 
            : 'none'
        return contShadow  
    }
    const getShadowImage = ()   => {
        let imgShadow = (imageShadow === true) 
            ? "0 0 15px rgba(50, 50, 73, 0.4)" 
            : 'none'
        return imgShadow  
    }
    let cShadow = getShadowContainer()
    let iShadow = getShadowImage()

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

    const getViewerSize = () =>  {
        let widthNum;
        let showEdges = (showNextPrev === true) ? (width > 600 ? 50 : 20) : 0; 
        if (typeof containerMaxWidth === "string"){
            widthNum = width * parseInt(containerMaxWidth) / 100;
        } else
            widthNum = containerMaxWidth
            let viewerSize = width > 600 ?  widthNum - showEdges : width - showEdges
            return viewerSize;
    }
    
    const [image, setImage] = useSprings(
        getImages().length, i => ({ 
            x: i * getViewerSize(), 
            scale: 1, 
            display: 'block' 
        }))
    
    const [ind, setInd] = React.useState(0)
  
    const applyImage = (active, distance, mx) => {
        setImage((i) => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * getViewerSize()   + (active ? mx : 0)
            const scale = active ? 1 - distance / getViewerSize() / 2  : 1
            return { x, scale, display: 'block' }
        })
    }
    
    const bind = useDrag((
    { active, movement: [mx], direction: [xDir], distance, cancel}) => {
        if (active && distance > getViewerSize() / 3)
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length  - 1)))
        
        applyImage(active, distance, mx);
        setInd(index.current)
    }
    )

    const [currentImg, setCurrentImg] = useState(null)
    const [isOpenCurrentImg, setIsOpenCurrentImg] = useState(false)  

    const handleClick = (currentI) => {
        setCurrentImg(currentI)    
        setIsOpenCurrentImg(true)
    }
    const handleClose = () => {
        setIsOpenCurrentImg(true)
    }

    const data = getImages();

    React.useEffect(() => {
        applyImage(true, 1, 1);
    })
    
    return(
        <React.Fragment>
            {isOpenCurrentImg ? (
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
            ): null}

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
                        <animated.picture key={i} {...bind()} 
                            className={classes.appExt} 
                            style={{display, x }}>
                            <React.Fragment>
                                <animated.source 
                                    className={classes.appInt} 
                                    srcSet= {data[i].path} 
                                />
                                <animated.div className={classes.imgContainer}>
                                    <animated.img 
                                        className={classes.appIntImg} 
                                        src={data[i].path} 
                                        alt={data[i].label} 
                                        style={{ scale }} />
                                </animated.div>
                            </React.Fragment> 
                        </animated.picture>
                    ): null
                ))}
            </div>
        </React.Fragment>
    )
}
export default SlideShow;

