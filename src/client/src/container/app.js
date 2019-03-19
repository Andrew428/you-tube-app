import _ from "lodash";
import React, { Component } from "react";

import SearchBar from "../components/search_bar";
import VideoList from "../components/video_list";
import VideoDetail from "../components/video_detail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch("Glitch Mob - Seeing Without Eyes(Full album)");
  }

  async videoSearch (term) {

    fetch(`/api/youtube/search/${term}`).then(async response  =>{
      const body = await response.json();
      console.log(body.videos.items);
      const videos = body.videos.items;
      if (videos.length > 0) {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }else{
        this.setState({
          videos: [],
          selectedVideo: null
        });  
      }
    });    
  }

  render() {
    const videoSearch = _.debounce(term => {
      if (term === '') {
        term = "Glitch Mob - Seeing Without Eyes (Full album)";
      }
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <img src="../images/you-tube.png" alt="You Tube"></img>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


export default App;