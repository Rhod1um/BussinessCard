import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//^dette skal altid importeres
//man skal manuelt fortælle hvilke react komponenter man har, her er
//button nu tilføjet

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your!</Text>
      <StatusBar style="auto" />
      <View style={styles.knap}>
        <Button title='Knap' style={"backgroundColor: '#aaa'"}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  knap: {
    color: '#784534',
    backgroundColor: '#ggg',
  }
});
