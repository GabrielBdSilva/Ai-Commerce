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
        margin:10,
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
    buttonDt:{
      width:300,
      height:40,
      padding:10,
      borderRadius:50,
      backgroundColor:'#8FCBD1',
      textAlign:'center',
      // alignSelf:"center",
      margin:20,
      color:"#fff",
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
    },



    //detailProduct______________________________________________________
    safeArea: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    card: {
        padding: 16,
        // backgroundColor: '#f9f9f9',
        borderRadius: 8,
        margin: 20,
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
      },
      imagedt: {
        width: 250,
        height: 250,
        borderRadius: 8,
        marginBottom: 8,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      price: {
        fontSize: 14,
        color: '#888',
      },
 //fim detailProduct______________________________________________________
 

})
export default styles;