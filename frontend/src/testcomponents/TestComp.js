import React from "react";

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {instrument: 'Guitar'}
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {instrument: props.new}
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({instrument: 'Drums'})
    //     }, 2000)
    // }

    componentDidUpdate() {
        console.log(this.state.instrument)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.instrument)
    }

    shouldComponentUpdate() {
        return true
    }

    changeVal = () => {
        this.setState({instrument: 'Tabla'})
    }

    render() {
        return (
            <>
                <h1>I know how to play {this.state.instrument}</h1>
                <button onClick={() => this.changeVal()}>Change Value</button>
            </>
            
        )
    }
}

export default Music;