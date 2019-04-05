import React, { Component } from 'react'

class App extends Component {
    render() {
        const Heading = React.createElement(
            'h1',
            { className: 'site-heading' },
            'Hello, React!'
        )
        const AppWrapper = React.createElement(
            'div',
            {className:'App'},
            Heading
        )

        return (
            <div className="App">
                {AppWrapper}
            </div>
        )
    }
}
export default App