//higher order function - a component thta returns another component
import React, { Component } from "react";

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            //default a property of component
            //import component runs async, if did in App screen would use .then after 
            const { default: component } = await importComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}