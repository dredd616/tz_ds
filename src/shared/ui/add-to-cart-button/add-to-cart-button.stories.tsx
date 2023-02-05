import { useBooleanControl } from 'storybox-react';
import { AddToCartButton } from './add-to-cart-button';

export const AddToCartButtonStory = () => {
  const [disabled] = useBooleanControl({
    name: 'disabled',
    defaultValue: false,
  });
  const [liked, setLiked] = useBooleanControl({
    name: 'liked',
    defaultValue: false,
  });

  return (
    <AddToCartButton
      onLikeClick={() => setLiked(!liked)}
      disabled={disabled}
      liked={liked}
    />
  );
};
