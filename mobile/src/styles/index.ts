import { StyleSheet } from 'react-native';

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

});

const theme = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.darkGray,
        width: "100%",
        height: "100%", 
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
    eyes:{},
    loginContainer:{
        flex: 1,
        
        alignItems: "center",
        backgroundColor: colors.darkGray,
        width: "100%",
        height: "100%", 
    },

});

const nav = StyleSheet.create({

    content:{
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"

    },
    leftText:{
        marginLeft:15,
        fontWeight:"bold",
        color: colors.black,
        fontSize: 18,
        marginRight:2
        },
        backImg:{
            marginLeft:15,
        }
});


export {colors, theme, text, nav };