import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-red-50 text-red-900 border-2 border-red-200 m-8 rounded-lg overflow-auto">
                    <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                    <div className="font-mono text-sm whitespace-pre-wrap bg-white p-4 rounded border border-red-100">
                        <div className="font-bold mb-2">{this.state.error?.toString()}</div>
                        {this.state.error?.stack}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
