//onst YTSearch = require("youtube-api-search");
const searchYoutube = require('youtube-api-v3-search');

const API_KEY = "";
exports.ytSearch = async (req, res, next)=>{ 
    
    console.log(`📺   Getting YouTube Search for ${req.params.term}`); 
    const term = req.params.term;    
    searchYoutube( API_KEY, {q: term, maxResults:25} ).then( videos => {
        // console.log(videos);
        res.send({
          videos: videos,
          selectedVideo: videos[0]
        })
      });     
}