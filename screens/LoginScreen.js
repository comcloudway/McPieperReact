import React from 'react';
import { ScrollView, StyleSheet, View, Text,AsyncStorage, Button, Modal, Alert } from 'react-native';
import {COLORS} from '../assets/Colors.js'
import { TextInput } from 'react-native-gesture-handler';



class LoginScreen extends React.Component {
static navigationOptions = {
    title: 'McPieper',
    headerTintColor: COLORS.white,
    headerStyle: {
      backgroundColor: COLORS.primary,
    }
  }
  constructor(props) {
      super(props)

      this.state = {
          username : '',
          password : '',
          modalVisible: false,
         modalBody: null
      }
  }
  componentDidMount() {

    this._start()
    this.setState({modalBody:
        <View>
        <Text>Username or Password wrong</Text>
        <Button color={COLORS.primaryDark} title='Close' onPress={()=>{this.setState({modalVisible:false})}}></Button>
        </View>
    })
  }
  render() {
      return (
          <View style={styles.container}>
              <Text>Bitte melde dich mit deinen McPieper Nutzerdaten an</Text>
              <TextInput style={styles.input} onChangeText={txt=>this._changeUsr(txt)} placeholder={'Nutzername'} textContentType={'username'}></TextInput>
              <TextInput style={styles.input} onChangeText={txt=>this._changePwd(txt)} placeholder={'Passwort'} textContentType={'password'}></TextInput>
              <Button color={COLORS.primaryDark} title='Login' onPress={this._login}></Button>

              <Modal animationType='slide' visible={this.state.modalVisible}>
                  {this.state.modalBody}
              </Modal>
          </View>
      )
  }
  _start = async () => {
      let auth = await AsyncStorage.getItem('auth')
    if (JSON.parse(auth).authed==true) {
        //this.props.navigation.navigate('Main')
      }
  }

  _login = () => {

fetch(`http://jusax.de/s/sani.php?un=${this.state.username}&d=&act=nt&key=${this.state.password}`)
.then(res=>res.text())
.then((txt)=>{
  Alert.alert(
    'tets',
    txt
  )
})
   // AsyncStorage.setItem('auth',JSON.stringify({authed: true}))
      this.setState({modalVisible: true})
  }
  _changeUsr = (txt) => {
      this.setState({username:txt})
  }
  _changePwd = (txt) => {
      this.setState({password:txt})
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  input: {
      width: '50%',
      margin: '5%'
  }
});