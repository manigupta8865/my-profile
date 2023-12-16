import { Alert, AlertTitle, AlertDescription, Flex, CloseButton, BoxProps } from '@chakra-ui/react';
import type { AlertProps, CloseButtonProps, AlertTitleProps } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import { Dismissing } from '~assets/icons';
import Icon from '../Icon/Icon.component';

export type NotificationStatus = 'info' | 'warning' | 'success' | 'error' | undefined;
interface Props extends AlertProps {
  status: NotificationStatus;
  title?: string;
  description: string | string[] | ReactElement;
  onClick?: () => void;
  isClosed?: boolean;
  variant: string;
  svg: ReactElement;
  showCloseButton?: boolean;
  prefixDataTestId?: string;
  isInnerHTML?: boolean;
  wrapperStyles?: BoxProps;
}

export default function Notification(props: Props) {
  const {
    isInnerHTML,
    description,
    title,
    prefixDataTestId,
    wrapperStyles,
    isClosed,
    ...alertProps
  } = props;

  const alertTitleStyle = {
    ...alertProps,
    maxWidth: 'full',
    mr: 0,
  } as AlertTitleProps;

  const closeIconStyle = {
    position: 'absolute',
    right: 'sm',
    top: 'sm',
  } as CloseButtonProps;

  return (
    <>
      {!isClosed && (title || description) && (
        <Alert p="md" {...alertProps} {...wrapperStyles}>
          <Icon svg={props.svg} />
          <Flex ml="8px" direction="column">
            {isInnerHTML && typeof title === 'string' ? (
              <AlertTitle {...alertTitleStyle}>{title}</AlertTitle>
            ) : (
              <AlertTitle {...alertTitleStyle}>{title}</AlertTitle>
            )}
            {isInnerHTML && typeof description === 'string' ? (
              <AlertDescription>{description}</AlertDescription>
            ) : Array.isArray(description) ? (
              description.map((descriptionText: string, index) => {
                return <AlertDescription key={index}>{descriptionText}</AlertDescription>;
              })
            ) : (
              <AlertDescription>{description}</AlertDescription>
            )}
          </Flex>
          {props.onClick && props.showCloseButton && (
            <CloseButton {...closeIconStyle}>
              <Icon svg={<Dismissing transform="scale(1.1)" />} />
            </CloseButton>
          )}
        </Alert>
      )}
    </>
  );
}
