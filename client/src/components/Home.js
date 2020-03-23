import React from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'


class Home extends React.Component {
    state = {
        listPlayers: [],
        originalList: [],
        searchTerm: ''
    }

    componentDidMount() {
        console.log(`Empty List of players`, this.state.listPlayers)
        axios.get(`http://localhost:5000/api/players`).then(response => {
            console.log(`Fetching Player Data:`, response)
            this.setState({
                listPlayers: response.data,
                originalList: response.data
            })
            console.log(`List of all players data: `, this.state.listPlayers)
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
        [e.target.name]: e.target.value           
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log(`SearchTerm: WE HAVE A CHANGE IN STATE!`)
            const characters = this.state.originalList.filter(char => char.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )
            this.setState({
                listPlayers: characters
            })
            console.log(this.state.searchTerm)
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    onChange={this.handleChange}
                    type="text"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    placeholder="Search Players"
                    />
                </form>
                <br />
                {this.state.listPlayers.map(item => (
                    <PlayerCard 
                    key={item.id}
                    name={item.name}
                    country={item.country}
                    searches={item.searches}
                    />
                ))}
            </div>
        )
    }
}

export default Home