import {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {SiteContext, useContext} from '../context/SiteContext';
import {HeaderContext} from '../context/HeaderContext';
import Logo from './Logo';
export default function Header() {
  const {theme, lang} = useContext(SiteContext);
  const [login, setLogin] = useState(false);

  const data = {
    login,
  };
  return (
    <View>
      {login && (
        <>
          <View style={styles.container}>
            <Text>bu alan sadece giris yapılınca görülür</Text>
          </View>
        </>
      )}
      <HeaderContext.Provider value={data}>
        <Logo />
      </HeaderContext.Provider>

      {login && (
        <Button
          title="Çıkış Yap"
          onPress={() => {
            setLogin(false);
          }}></Button>
      )}
      {!login && (
        <Button
          title="Giriş Yap"
          onPress={() => {
            setLogin(true);
          }}></Button>
      )}

      <Text>Mevcut Tema (Header) = {theme} </Text>
      <Text>Kullanılan Dil (Header) = {lang} </Text>
      <Text>------------------------------</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
