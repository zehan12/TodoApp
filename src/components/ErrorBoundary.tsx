import React, { ErrorInfo } from "react";
import { User } from "../types/user";
import { StyledLink } from "../styles";
import { Emoji } from "emoji-picker-react";

interface ErrorBoundaryProps {
  // fallbackUI: React.ReactNode;
  user: User;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component that catches and displays errors within its children.
 */

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1
            style={{
              color: "#ff3131",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            Oops! An error occurred&nbsp;
            <Emoji size={38} unified="1f644" />.
          </h1>{" "}
          <h2>
            To fix it, try clearing your local files (cookies and cache) and
            then refresh the page. If the problem persists, please report the
            issue via{" "}
            <StyledLink href="https://github.com/maciekt07/TodoApp/issues">
              Github Issues
            </StyledLink>
            .
          </h2>
          <h3>
            <span style={{ color: "#ff3131" }}>ERROR:</span> [
            {this.state.error?.name}] {this.state.error?.message}
          </h3>
          <div style={{ opacity: 0.8, fontSize: "12px" }}>
            {this.state.error?.stack?.replace(this.state.error?.message, "")}
          </div>
          <pre>
            <code>{JSON.stringify(this.props.user, null, 4)}</code>
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
