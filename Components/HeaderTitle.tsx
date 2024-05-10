import { Image, Text, View } from "react-native";

const HeaderTitle = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 20, height: 20}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={{fontSize: 36}}>Ai Commerce</Text>
        {/* <Text style={{fontSize: 36, color: tintColor}}>{children}</Text> */}
      </View>
    );
  };

  export default HeaderTitle;