import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import debounce from 'lodash.debounce';
import './src/style.scss';
// import $ from 'jquery';

import SearchBar from './src/components/search_bar';
import youtubeSearch from './src/components/youtube-api';
import VideoList from './src/components/video_list';
import VideoDetail from './src/components/video_detail';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
// here's what our constructor would look like
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.search = debounce(this.search, 300);
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      console.log(videos);

      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
          <VideoDetail video={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
