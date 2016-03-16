import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        var i = 123;
        return <h1>Hello {i}</h1>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));