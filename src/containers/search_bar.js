import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '.././actions/index'


class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            term: ''
        };

        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    onFromSubmit (event){
        event.preventDefault();

        //We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});

    }

    render () {
        //console.log(this.state.term);
        return (
            <div>
                <form onSubmit={this.onFromSubmit} 
                className="input-group">
                    <input 
                        className="form-control"
                        placeholder="Get a five-day forecast in your favorite cities" 
                        type="text" 
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event)}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ( {fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);