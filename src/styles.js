import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    button: {
        backgroundColor: '#f6e0c9',
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: '25%',
        padding: 1,
        width: '50%'
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 25
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    container: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 16,
      },
    galleryContainer: { 
        bottom: 100 
    },
    galleryImageContainer: { 
        width: 75, 
        height: 75, 
        marginRight: 5 
    },
    galleryImage: { 
        width: 75, 
        height: 75 
    },
    instructionsPage: {
        textAlign: 'center',
        paddingTop: 100,
        fontSize: 25
    },
    item: {
        padding: 10,
        fontSize: 18,

    },

});
