import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { ContainerProps } from '@/lib/types';

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

const Container = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

const ContainerNamespace = Object.assign(Container, {
  Outer: OuterContainer,
  Inner: InnerContainer
});

export { ContainerNamespace as Container };
