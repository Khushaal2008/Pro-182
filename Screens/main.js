import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
} from 'react-native';

import * as Permissions from 'expo-permissions';

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };

        this.onFacesDetected = this.onFacesDetected.bind(this);
    }

    async componentDidMount( ) {
        const { status } = await Camera.requestPermissionsAsync();
        this.state({ hasCameraPermission: status === "granted"});
    }

    onFacesDetected({ faces })
    {
        this.setState({ faces: faces });
    }

    return(
        <View>
            <Camera
                style = {{ flex: 1 }}
                type={Camera.Constants.Type.front}
                faceDetectorSettings={{
                    mode: FaceDetector.Constants.Mode.fast,
                    detectLandmaks: FaceDetector.Constants.Landmarks.all,
                    runClassifications: FaceDetector.Constants.Classifications.all
                }}
                onFacesDetected={this.onFacesDetected}
                onFacesDetectedError={this.onFacesDetectedError}
            />

        </View>
    );
}