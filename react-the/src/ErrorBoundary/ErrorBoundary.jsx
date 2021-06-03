import React from 'react'
import style from "radium/es/components/style";

export default class ErrorBoundary extends React.Component{
    state = {
        hasErrors: false
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasErrors){
            return <h1 style={{color:'red'}}>Something went wrong</h1>
        }
        return this.props.children
    }
}