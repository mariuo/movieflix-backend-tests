import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const colors = {
    primary:"#FFC700",
    secondary: "#937d1c",
    black: "#000",
    darkGray: "#525252",
    mediumGray: "#6C6C6C",
    softGray: "#9E9E9E",
    lightGray: "#CDCDCD",
    white: "#FFF",
    red: ""
}

const text = StyleSheet.create({
    bold:{
        fontWeight: "bold",
        fontSize: 26,
        color: colors.white,
        textAlign: 'center',
    },
    regular:{
        fontWeight: "400",
        fontSize: 16,
        color: colors.lightGray,
        marginTop: 50,
        textAlign: 'center',
    },
    primaryBtn:{
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginLeft: 90,
    },
    loginTitle:{
        fontWeight:"400",
        fontSize: 30,
        textTransform: "uppercase",
        color: colors.white,
        marginTop: 100,
        marginBottom: 50,
    },
    btnLogout:{
        fontSize:14,
        color: colors.black,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    /// Card
    cardTitle:{
        fontWeight:"bold",
        fontSize: 18,
        color: colors.white,
        marginTop: 20,
             
    },
    cardYear:{
        fontSize: 14,
        color: colors.primary,
        fontWeight:"bold",
          
    },
    cardSubTitle:{
        fontSize: 16,
        color: colors.lightGray,
        
    },
    cardDetails:{
        color: colors.white,
        fontWeight: "bold",
        textTransform: "uppercase",
        justifyContent: "center",
                
    },
    /// search
    search:{
        fontSize: 16,
        fontWeight: "400",
        color: colors.white,        
        backgroundColor: colors.mediumGray,
        borderColor: colors.white,
        borderWidth: 1,
        width: "100%" ,
        borderRadius: 10, 
        textAlign: "center",
        paddingRight: 10,
        paddingVertical: 10,
        
    },
    modal:{
        color:colors.white,
    },
    


});

const theme = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.darkGray,
        width: "100%",
        height: "100%",
        padding: 20, 
    },
    content:{
        width: 220,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

    },
    primaryBtn:{
        backgroundColor: colors.primary,
        width: 300,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",

    },
    arrowContainer:{
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems:"center",
        justifyContent: "center",
    },

    // LOGIN
    form:{
        marginVertical:10,
    },
    textInput:{
        width:290,
        height:50,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding:10,
    },
    passwordContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical:25,

    },
    toggle:{
        marginLeft:-40,
    },
    eyes:{
        width: 25,
        height: 20,
        opacity: 0.5,        
    },
    loginContainer:{
        flex: 1,        
        alignItems: "center",
        backgroundColor: colors.darkGray,
        width: "100%",
        height: "100%", 
    },
    // Movies
    scrollContainer:{
        padding: 20,
        backgroundColor: colors.darkGray,
    },
    card:{
        backgroundColor:colors.mediumGray,        
        width: "100%",               
        borderRadius: 10,
        paddingVertical: 20,
        alignItems: "center",   
        marginVertical: 10,   
    },
    movieCardInfo:{
        width: "100%",
        padding: 15,
        
    },
    cardBtnDetails:{
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        paddingVertical: 3,
        marginRight: 18,
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",      
    },
    cardImg:{
        width:"100%",
        height:210,        
    },
    //Search
    modalContainer:{
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent:"center",
    },
    modalContent:{
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.darkGray,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    modalItem:{
        width: "100%",
        backgroundColor: colors.mediumGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5, 
    },
    
    selectInput:{
            width:290,
            height:50,
            borderWidth:1,
            borderColor: colors.mediumGray,
            borderRadius: 10,
            padding: 10,
            marginVertical: 15,
            justifyContent: "center",
        },

    searchContainer:{
        backgroundColor:colors.mediumGray,        
        width: "100%",               
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal:15,
        marginVertical: 10, 
    },
    searchContent:{
        backgroundColor: colors.mediumGray,
        flexDirection: "row",
        alignItems:"center",        
    },
    searchArrow:{
        marginLeft: -40,
        transform: [{ rotate: '90deg' }],
        
    }


});

const nav = StyleSheet.create({

    content:{
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"

    },
    leftText:{
        marginLeft: 25,
        fontWeight:"bold",
        color: colors.black,
        fontSize: 18,
        
        },
        backImg:{
            marginLeft: 25,
            
        },
        btnLogout:{
            borderWidth: 1.5,
            borderColor: colors.black,
            borderRadius: 10,
            paddingVertical: 3,
            marginRight: 18,
            width: 75,
            height: 26,
            alignItems: "center",
            justifyContent: "center",

        },
});


export {colors, theme, text, nav };