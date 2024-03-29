import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Alert } from 'react-native';
import { useFinance } from './FinanceContext'; // Make sure the path is correct

const AddTransaction = () => {
  // State for managing form inputs
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isRepeat, setIsRepeat] = useState(false);

  const { addExpense } = useFinance(); // Use the addExpense function from your FinanceContext

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      addExpense(numericAmount); // Use the context's addExpense to update the global expense state
      // Optionally reset the form fields here
      setAmount('');
      setCategory('');
      setDescription('');
      setIsRepeat(false);
      // Any navigation or feedback actions following a successful submission
      Alert.alert("Success", "Expenses added successfully.");
    } else {
      Alert.alert("Invalid Input", "Your expense must be greater than zero.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expense</Text>
      <Text style={styles.header}>How much?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      
      <View style={styles.repeatContainer}>
        <Text style={styles.repeatText}>Repeat</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isRepeat ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={setIsRepeat}
          value={isRepeat}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 18,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  attachmentText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#444',
  },
  repeatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  repeatText: {
    fontSize: 18,
    color: '#444',
  },
  submitButton: {
    backgroundColor: '#ff5252',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTransaction;
