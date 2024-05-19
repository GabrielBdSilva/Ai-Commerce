import { StyleSheet} from 'react-native';

const stylesInterest = StyleSheet.create({
    interestItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      margin: 20,
      width:100,
      height:100,
      alignItems:'center',

    },
    interestItemSelected: {
      backgroundColor: '#f0f0f0',
    },
    interestItemText: {
      fontSize: 16,
    },
    
    selectedInterestsLabel: {
      fontSize: 17,
      fontWeight: '500',
      alignSelf:'flex-start'

    },

    selectedInterestItemText: {
        fontSize: 13,
        marginRight:20,
        marginBottom:20,
        height:20,
      },
      noSelectedInterestsText: {
        fontSize: 16,
        color: '#ccc',
      },
    });
    export default stylesInterest;