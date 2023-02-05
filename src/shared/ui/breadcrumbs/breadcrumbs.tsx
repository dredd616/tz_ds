import React, { FC } from 'react';
import { ReactComponent as IconArrow } from '@/assets/icons/icon-breadcrumb.svg';
import { ReactComponent as IconHome } from '@/assets/icons/home.svg';
import { S } from './breadcrumbs.styles';

export type TBreadcrumbItem = {
  label: string;
};

export type TBreadcrumbs = {
  items: Array<TBreadcrumbItem>;
};

export const Breadcrumbs: FC<TBreadcrumbs> = ({ items }) => (
  <S.Breadcrumbs>
    <IconHome className="home" />
    <IconArrow className="arrow" />
    {items.map((item) => (
      <React.Fragment key={item.label}>
        <S.BreadcrumbItem>{item.label}</S.BreadcrumbItem>{' '}
        <IconArrow className="arrow" />
      </React.Fragment>
    ))}
  </S.Breadcrumbs>
);
