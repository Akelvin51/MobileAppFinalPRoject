import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFinance } from './FinanceContext'; // Ensure this path is correct

const IncomeComponent = () => {
  const { addIncome } = useFinance(); // Make sure to import useFinance
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [wallet, setWallet] = useState('');
  const [repeat, setRepeat] = useState(false);

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      addIncome(numericAmount); // Use the context's addIncome to update the global income state
      // Optionally reset the form fields here
      setAmount('');
      setCategory('');
      setDescription('');
      setWallet('');
      setRepeat(false);
      // Handle navigation or feedback
      Alert.alert("Success", "Income added successfully.");
    } else {
      Alert.alert("Invalid Input", "Your income must be greater than zero.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Income</Text>
      <Text style={styles.label}>How much?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="$0"
      />
      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Select category"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Add a description"
      />
      <Text style={styles.label}>Wallet</Text>
      <TextInput
        style={styles.input}
        value={wallet}
        onChangeText={setWallet}
        placeholder="Select wallet"
      />
      <TouchableOpacity style={styles.attachmentButton}>
        <Icon name="attach-file" size={20} />
        <Text>Add attachment</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text>Repeat transaction</Text>
        <Switch
          value={repeat}
          onValueChange={setRepeat}
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 5,
  },
  attachmentButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: 'purple',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IncomeComponent;
