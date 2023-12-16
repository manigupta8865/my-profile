import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Alert } from '~assets/icons';
import Notification from '~components/atoms/components/Notification/Notification.component';

interface Props {
  onError?: (err: Error) => void;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends React.Component<any> {
  static propTypes = {
    children: PropTypes.any,
    onError: PropTypes.func,
  };

  state: State = { error: undefined };
  // eslint-disable-next-line no-console
  onError = console.error;

  constructor(props: Props) {
    super(props);
    this.onError = this.onError || props.onError;
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: error,
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.error && !prevState.error) {
      this.onError(this.state.error);
    }
  }

  render() {
    if (this.state.error)
      return (
        <Box mt="lg">
          <Notification
            wrapperStyles={{
              display: 'flex',
              justifyContent: 'center',
            }}
            status="warning"
            description="Something went wrong, please try again later"
            variant="alert"
            maxW="full"
            svg={<Alert />}
          />
        </Box>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
