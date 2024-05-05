import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    Fundo: {
        flex: 1,
        backgroundColor: '#3E8F9C',
        alignItems: 'center',
        justifyContent: 'center',
      },
    container:{
        flex: 1,
        backgroundColor: '#Fff',
        padding:30,
       
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:15,
    },
    title:{
        textAlign:'center',
        width:320,
        fontSize:50,
        fontWeight:'bold',
        marginTop:100,
        marginBottom:30,
        color:'#fff',
    },
    input:{
        width:250,
        height:40,
        // margin:10,
        padding:10,
        borderRadius:50,
        backgroundColor:'#EAEAEA',
    },
    button:{
        width:250,
        height:40,
        padding:10,
        borderRadius:50,
        backgroundColor:'#DCEFF1',
        textAlign:'center',
        alignSelf:"center",
        marginBottom:100,
        marginTop:40,
        color:"#4794A0",
        fontWeight:'bold',
    },
    forgotAndSingup:{
        marginTop: 15,
        alignSelf:"flex-end",
    },
    inputText:{
        marginTop: 10,
        marginLeft: 10,
        
        alignSelf:"flex-start",
    }
    
})
export default styles;