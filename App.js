import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>數位三甲 111019006 李映萱</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE1E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize:30,
    color:'#F18BA2'
  }
});
