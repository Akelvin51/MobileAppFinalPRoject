import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TransactionList = ({ transactions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.transactionItem, item.type === 'expense' ? styles.expense : styles.income]}>
            <Text style={styles.amount}>${Math.abs(item.amount)}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  expense: {
    backgroundColor: 'red',
  },
  income: {
    backgroundColor: 'green',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
});

export default TransactionList;
