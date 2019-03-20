import React, { Component } from 'react';
import axios from 'axios';

 class Lyrics extends Component {
    state = {
        tracks:{},
        lyrics:{}
    };

    componentDidMount() {
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=8d21700582518fd4af4424fac1238022`)
             .then(res => {
                // console.log(`${this.props.match.params.id}`);
                 console.log(res.data);
                 this.setState({ lyrics:res.data.message.body.lyrics });
             })

         return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=8d21700582518fd4af4424fac1238022`)
             .then(res => {
                 console.log(res.data);
                 this.setState({ tracks: res.data.message.body.tracks });
             }) 
             .catch(err => console.log(err));
     }
  
    render() {
       
        return (

      <div>
        <h1>Lyrics</h1>
      </div>
    )
  }
}

export default Lyrics;