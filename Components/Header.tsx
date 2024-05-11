import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import {Text, View } from "react-native";



// // Import icons from the free solid pack
library.add(faCircleUser, faCartShopping);



const Header= () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          {/* preciso tirar essa marginRight,e deixar responsivo */}
        <Text style={{fontSize: 24, color:'#fff',marginRight: 130}}>Ai Commerce</Text>
        </View>
        <View style={{flexDirection: 'row',alignSelf:'center'}}>
        <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: 3 }} size={24} color="#fff" />
        
        {/* quando for adicionado icone no carrinho aqui vai ir mudando */}
        <Text style={{borderWidth:2,borderRadius:7, borderColor:'#fff',borderStyle:'dotted', textAlign:'center',textAlignVertical:'center',color:'#fff'}}> 0 </Text>
        <FontAwesomeIcon style={{ marginLeft: 15 }} icon={faCircleUser} size={24} color="#fff" />
        </View>
      
      </View>
    );
  };

  export default Header;