import {Button, View, Text} from 'react-native';
import {useSite} from  "./context"
export default function SwitchTheme() {
    const {theme, dispatch} = useSite();
  const switchTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    });
    }
  return (
    <View>
      <Text>mevcut tema = {theme}</Text>
      <Button
        title="temayı degistir"
        onPress={switchTheme}
      />
    </View>
  );
}