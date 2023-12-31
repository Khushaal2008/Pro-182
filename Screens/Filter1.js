import React from 'react';
import { Image, View } from 'react-native';

const Filter1 = ({
    face: {
        bounds: { width: faceWidth, height:faceHeight}
    },
    leftEyePosition,
    rightEyePosition,
    noseBasePosition
}) => {
    const filterWidth = faceWidth
    const filterHeight = faceHeight / 3
    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) / 
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad*180/Math.PI
    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - filterWidth * 0.675,
            top: leftEyePosition.y - filterHeight * 0.5
        }}>
            <Image 
                source={require('../assets/assets/crown-pic1.png')}
                style={{
                    widdth: filterWidth,
                    height: filterHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter1