import * as React from 'react';
//^ekstra import, taget fra neteksempel med navigation:
//https://reactnavigation.org/docs/hello-react-navigation
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//^dette skal altid importeres
//man skal manuelt fortælle hvilke react komponenter man har, her er
//button nu tilføjet

function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headline}>We're here for amazing IT people!</Text>
        <View style={styles.frame}>
          <Image source={require('./images/rosalindfranklin.png')} style={{ width: 150, height: 150 }}/>
        </View>
        <StatusBar style="auto" />
        <View style={styles.knap}>
          <Button title='Knap'></Button>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <Button
          title="Go to Basma"
          onPress={() => navigation.navigate('Basma')}
        />
      </View>
    </View>
  );
}
function DetailsScreen({ route, navigation }) { //route for at pass parametre
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text> 
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: itemId*2, //ovenover vises itemId, her ganges det med to hver gang man trykkergo to details.. again
          })
        }
        //push gør at man går ind på siden igen selvom det er samme side - adder route to navigation stack
        //navigate ville ikke ændre side selv når man trykkede
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} 
      //går til home siden uanset hvor dybt man er i navigation stack (hvor meget man har trykket go to detailt.. again)
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      //den sidste her gør at man går til første ting i navigation stack, her er det så home
      />
    </View>
  );
}
function Basma({navigation}){
  return (
    <View style={stylesBasma.container}>
      <View style={stylesBasma.card}> 
        <Image
          style={stylesBasma.companyImage}
          source={{
            uri: 'https://bibliotek.kea.dk/images/KEAprodukter/KEA_logo_EN_Web_red.png',
          }} 
          resizeMode="contain"
        />
        <Text style={stylesBasma.name}>Basma Jawad</Text>
        <Text style={stylesBasma.title}>Head Of It</Text>
        <Text style={stylesBasma.contactInfo}>Email: basm0035@kea.dk</Text>
        <Text style={stylesBasma.contactInfo}>Phone: +45 42616225</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={App}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }} //man kan sætte default parametre
        />
        <Stack.Screen
          name="Basma"
          component={Basma}
          options={{title: 'Basma'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
  },
  headline: {
    fontSize: 20,
    color: '#8B0000',
    marginBottom: 20,
  },
  frame: {
    height: 200,
    width: 200,
    padding: 25,
    backgroundColor: '#8B0000'
  }
});

const stylesBasma = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233249',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    paddingBottom: 60,
    paddingTop: 0,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  companyImage: {
    width: 130,
    height: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10

  },
  contactInfo: {
    fontSize: 16,
    marginTop: 10,
  },
});