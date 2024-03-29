import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LineChart} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFinance} from './FinanceContext';
const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
  strokeWidth: 2,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
const Dashboard = () => {
  const {expenses, income, transactions} = useFinance();
  const navigation = useNavigation();

  const renderTransactions = () => {
    return transactions.map((transaction, index) => (
      <View
        key={index}
        style={[
          styles.transactionItem,
          transaction.type === 'expense' ? styles.expense : styles.income,
        ]}>
        <Text style={styles.transactionAmount}>
          {transaction.type === 'expense' ? '-' : '+'}${transaction.amount}
        </Text>
        <Text style={styles.transactionDescription}>
          {transaction.description}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.flexContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Account Balance</Text>
        <Text style={styles.balance}>${income - expenses}</Text>

        <View style={styles.indicatorContainer}>
          <TouchableOpacity
            style={[styles.indicator, styles.income]}
            onPress={() => navigation.navigate('Income')}>
            <Icon name="arrow-downward" size={20} color="white" />
            <Text style={styles.indicatorText}>Income</Text>
            <Text style={styles.indicatorAmount}>${income - expenses}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.indicator, styles.expenses]}
            onPress={() => navigation.navigate('Expenses')}>
            <Icon name="arrow-upward" size={20} color="white" />
            <Text style={styles.indicatorText}>Expenses</Text>
            <Text style={styles.indicatorAmount}>${expenses}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Spend Frequency</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
        />

        <Text style={styles.title}>Recent Transactions</Text>
        {renderTransactions()}

        <TouchableOpacity style={styles.seeAllButton}>
          <Text>See All</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#444" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Transaction')}>
          <Icon name="swap-horiz" size={24} color="#444" />
          <Text>Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Profile')} // Use the route name for ProfileComponent
        >
          <Icon name="person" size={24} color="#444" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  income: {
    backgroundColor: 'green',
  },
  expenses: {
    backgroundColor: 'red',
  },
  indicatorText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicatorAmount: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    alignItems: 'flex-end',
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabItem: {
    alignItems: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDescription: {
    fontSize: 16,
  },
  income: {
    backgroundColor: 'green',
  },
  expense: {
    backgroundColor: 'red',
  },
});

export default Dashboard;
