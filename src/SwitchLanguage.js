import {Button, View, Text} from 'react-native';
import {useSite} from './context';
export default function SwitchLanguage() {
    const {language, dispatch} = useSite();
    
    const switchLanguage = () => {
     dispatch({
      type: 'TOGGLE_LANGUAGE',
    });
    }

  return (
    <View>
      <Text>mevcut dil = {language}</Text>
      <Button
        title="dili degistir"
        onPress={
          switchLanguage
        }
      />
    </View>
  );
}
