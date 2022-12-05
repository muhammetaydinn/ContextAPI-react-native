import {Button, Text, View} from 'react-native';
import {SiteContext, useContext} from '../context/SiteContext';
import SwitchTheme from './switch/SwitchTheme';
import SwitchLanguage from './switch/SwitchLanguage';
export default function Footer() {
  const {theme, lang} = useContext(SiteContext);
  return (
    <View>
      <SwitchTheme />
      <SwitchLanguage />
      <Text>Mevcut Tema (Footer) = {theme} </Text>
      <Text>Kullanılan Dil (Footer) = {lang} </Text>
    </View>
  );
}
