import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
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
    buttons: {
        flexDirection: 'row',
    },
    Button: {
        backgroundColor: '#BF9100',
        borderRadius: 10,
        width: '30%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        textAlignVertical: 'center'
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
    item: {
        paddingTop: 10,
        fontSize: 18
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
        fontSize: 25
    },
    instructions: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10

    },
    productImage: {
        height: 200,
        width: 200,
        marginLeft: '20%',
    },
    homeLogo: {
        margin: '9%',
    },
    homeButton: {
        width: winWidth - 20,
        height: '15%',
        margin: 10,
        backgroundColor: '#BF9100',
        borderRadius:10
    },
    homeButtonText: {
        textAlign: 'center',
        width: winWidth-20,
        marginTop: 30,
        fontSize: 35
    },
    pressedButton: {
        backgroundColor: '#c0c0c0',
        borderRadius: 10,
        width: '33.33%',        
        marginTop: 10,
        marginBottom: 10,
    },
    vanityProductName: {
    },
    sbs_instruct: {
        padding: 10,
        margin: 10
    },
    nextstep: {
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 20
    },
    nextcontent: {
        fontSize: 10
    },
    cardStyles: {
        marginTop: '5%',
        paddingTop: '2%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 20,
        height: '90%'
    }
});
