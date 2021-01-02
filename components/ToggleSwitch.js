import * as React from 'react';
import { Switch } from 'react-native-paper';

const ToggleSwitch = (color, id) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  }

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={color} />;
};

export default ToggleSwitch;