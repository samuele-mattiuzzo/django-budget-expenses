import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('*** BOUNDARY ***');
    console.error(error);
    console.error(errorInfo);
    console.error('*** BOUNDARY ***');
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p><i>Something went wrong</i></p>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
