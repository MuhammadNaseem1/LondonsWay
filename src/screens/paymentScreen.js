import React from 'react';
import { View, StyleSheet, Alert,Text } from 'react-native';
import CustomButton from '../ReusableComponents/customeButton';
import CustomTextInput from '../ReusableComponents/customisedTextInputComponnet';
import AppLayout from '../ReusableComponents/appLayout';
const PaymentScreen = () => {
    const handlePayment = () => {
        // Implement your Stripe payment logic here
        // This is a placeholder for handling payment
        Alert.alert('Payment', 'Processing payment');
      };
    
      return (
        <AppLayout headerTitle={'Pay'} ScreenText={'This screen will help you to pay your amount online while sitting at home.'}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <CustomTextInput placeholder="Card Number" />
            <CustomTextInput placeholder="Expiration Date" />
            <CustomTextInput placeholder="CVC" />
            <CustomTextInput placeholder="Name on Card" />
            <CustomButton title="Pay Now" onPress={handlePayment} style={styles.button} />
          </View>
          <View style={styles.footer}>
            <Text style={{}}>Terms and Conditions</Text>
          </View>
        </View></AppLayout>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    formContainer: {
      width: '100%',
    },
    button: {
      marginTop: 20,
    },
    footer: {
      position: 'absolute',
      bottom: 20,
    },
  });
export default PaymentScreen