import {
  useBooleanControl,
  useRadioControl,
  useStringControl,
} from 'storybox-react';
import { Button } from './button';

const adornmentOptions = ['👻', '💩', '🤑', ''];
export const ButtonStory = () => {
  const [children] = useStringControl({
    name: 'children',
    defaultValue: 'в корзину',
  });
  const [endAdornment] = useRadioControl({
    name: 'endAdornment',
    options: adornmentOptions,
    defaultValue: adornmentOptions[0],
  });
  const [disabled] = useBooleanControl({
    name: 'disabled',
    defaultValue: false,
  });

  return (
    <Button endAdornment={endAdornment} disabled={disabled}>
      {children}
    </Button>
  );
};
