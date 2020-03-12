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
        paddingLeft: 10
    },
    productImage: {
        height: 200,
        width: 200,
        marginLeft: '20%',
    },
    homeLogo: {
        margin: '23%',
    },
    homeButton: {
        alignContent: 'center',
        margin: 10,
    },
    pressedButton: {
        backgroundColor: '#c0c0c0',
        borderRadius: 10,
        width: '33.33%',        
        marginTop: 10,
        marginBottom: 10,
    },
    vanityProductName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    sbs_instruct: {
        padding: 10,
        margin: 10
    },
    nextstep: {
        padding: 10,
        marginTop: '2%',
        marginBottom: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 20
    },
    timerCard: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    timer: {
        alignItems: 'center'
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
        elevation: 20
    },
    card: {
        marginTop: '4%',
        marginHorizontal: '2%',
        paddingTop: '20%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 20,
        height: '30%',
        width: '45%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    cardcover: {
        flex: 1,
        height: undefined,
        width: undefined,
        padding: '45%',
        resizeMode: 'contain',
        marginBottom: '10%'
    },
    vanity_scroll: {
        flex: 1,
        height: '100%'
    },
    routine_text: {
        color:'#9fa0a4',
        textAlign: 'right',
        margin: '2%',
        marginRight: '30%'
    },
    vanity_text: {
        color:'#9fa0a4',
        margin: '2%',
        marginLeft: '5%'
    },
    vanity_title_text: {
        color:'#000',
        textAlign: 'center',
        marginLeft: '3%',
        marginTop: '10%',
        marginBottom: '1%',
        fontSize: 25
    },
    vanity_view: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start',
        marginLeft:'2.5%'
    },
    instructionCard: {
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
        width: '90%',
        marginLeft: '5%'
    },
    introBG: {
        width: '100%',
        height:'100%',
        position:'relative'
    },
    introText: {
        position:'absolute',
        top: '10%',
        left: 10,
        fontSize: 80,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    introButton: {
        position:'absolute',
        top: '80%',
        left: 10,
        color: '#FFFFFF'
    },
    // instructions page
    toggleButtons: {
        width: "50%",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 0,
        borderColor: 'white',
        

    },
    toggleText: {
        color: 'black',
        textAlign: 'left'
    },
    vanityButton: {
        position: 'absolute',
        top: '5%',
        left: '5%'
    }
});
