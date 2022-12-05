import {Button, View, Text} from 'react-native';
import {SiteContext, useContext} from '../../context/SiteContext';
export default function SwitchTheme() {
  const {theme, setTheme} = useContext(SiteContext);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <View>
      <Button title="Tema Değiş" onPress={() => changeTheme()} />
    </View>
  );
}
