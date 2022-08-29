import React from 'react'

class Navbar extends React.Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            title: 'this is a title'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getderived method')
        // return {title: props.title}
    }

    componentDidMount() {
        console.log('component did mount')
        // this.setState({
        //     title: 'this is a new title'
        // })
    }

    shouldComponentUpdate() {
        console.log('should component update')
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('get snapshot before update')
        return true;
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    changeVal() {
        this.setState({
            title: 'this is a new title'
        })
    }

    render () {
        console.log('rendering component')
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <button onClick={() => this.changeVal()}>Change Value</button>
            </React.Fragment>
                
           
            
        )
    }
}

export default Navbar