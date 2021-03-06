import React from "react";
import { animated } from "react-spring";
import { useStyles } from "./style";
import { getShadowImage } from "./utils/getShadow";

const AnimatedPicture = (props) => {
    const { imageShadow } = props;

    let iShadow = getShadowImage(imageShadow);

    const classes = useStyles(iShadow)();

    const { i, new_bind, display, x, new_data, scale } = props;

    return (
        <animated.picture
            key={i}
            {...new_bind()}
            className={classes.appExt}
            style={{ display, x }}
        >
            <React.Fragment>
                <animated.source
                    className={classes.appInt}
                    srcSet={new_data[i].path}
                />
                <animated.div className={classes.imgContainer}>
                    <animated.img
                        className={classes.appIntImg}
                        src={new_data[i].path}
                        alt={new_data[i].label}
                        style={{ scale }}
                    />
                </animated.div>
            </React.Fragment>
        </animated.picture>
    );
};
export default AnimatedPicture;
