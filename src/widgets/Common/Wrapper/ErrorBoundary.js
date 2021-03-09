import { Component } from 'react';
import ErrorTip from '../ErrorTip';
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, msg: '' };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    if (error?.message) {
      this.setState({ msg: error.message });
    }
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  handleReload = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      const { error, reload } = this.props.lang;
      // You can render any custom fallback UI
      return (
        <ErrorTip tip={this.state.msg || error} reloadTxt={reload} reload={this.handleReload} />
      );
    }

    return this.props.children;
  }
}
