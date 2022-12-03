import { Button, Text, View } from 'react-native';
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';

export default function Footer() {
  return (
    <View>
      <SwitchTheme />
      <SwitchLanguage />
    </View>
  );
}
