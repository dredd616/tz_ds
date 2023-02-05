import React, { FC, useRef, useState } from 'react';
import { useMediaSizes } from '@/shared/theme';
import {
  MoveCallback,
  StartEndCallback,
  useBounds,
  useDragHandlers,
} from '@/shared/hooks';
import { S } from './gallery.styles';

export type TGalleryItem = { original: string; thumbnail: string; key: string };

export type TGallery = {
  items: Array<TGalleryItem>;
};

export const Gallery: FC<TGallery> = ({ items }) => {
  const isMobile = useMediaSizes((theme) => theme.under('sm'));
  const ref = useRef<HTMLDivElement>(null);
  const bounds = useBounds(ref);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const onMove: MoveCallback = ([x]) => setOffset(x);

  const onEndMove: StartEndCallback = () => {
    if (offset < 0 && items.length - 1 >= activeIndex + 1) {
      setActiveIndex(activeIndex + 1);
    } else if (offset > 0 && activeIndex - 1 >= 0) {
      setActiveIndex(activeIndex - 1);
    }
    setOffset(0);
  };

  const dragHandlers = useDragHandlers({ onMove, onEndMove });

  return (
    <S.Gallery ref={ref}>
      <S.MainImageContainer
        $offset={-(activeIndex * bounds.width) + offset}
        {...dragHandlers}
      >
        {items.map((item) => (
          <S.MainImage key={item.key}>
            <img draggable={false} alt="" src={item.original} />
          </S.MainImage>
        ))}
      </S.MainImageContainer>
      {isMobile ? (
        <S.BulletsContainer>
          {items.map((item, i) => (
            <S.Bullet
              key={item.key}
              $active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </S.BulletsContainer>
      ) : (
        <S.ThumbnailsContainer>
          {items.map((item, i) => (
            <S.Thumbnail
              key={item.key}
              data-active={i === activeIndex}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <img draggable={false} alt="" src={item.thumbnail} />
            </S.Thumbnail>
          ))}
        </S.ThumbnailsContainer>
      )}
    </S.Gallery>
  );
};
