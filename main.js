const request = require('request');



class YoutubeAPI {

    SearchOnYoutube(keyword, APIKEY) {
        return new Promise((resolve, reject) => {
            
             var searchOPT = {
                 qs: {
                     q: keyword,
                     part: "snippet",
                     key: APIKEY,
                     type: "video",
                     maxResults: 5
                 },
                 uri: "https://www.googleapis.com/youtube/v3/search"
             }
            
            
            request.get(searchOPT, (err, res, body) => {
                if (err) return resolve({error: err});
            
            
                let result = [];
            
                let searchData = JSON.parse(body);
                if (searchData.error) return resolve({error: searchData.error.errors[0]});
                
                if (searchData.items.length == 0) return resolve(result);

                let processedData = 0;
                searchData.items.forEach((value, index) => {

                    this.GetInfo(value.id.videoId, APIKEY).then(videoInfo => {
                        if (videoInfo.error) return resolve({error: videoInfo.error});
                        result.push(videoInfo);
                        processedData += 1;
                        
                        if (processedData == searchData.items.length) return resolve(result);
                    });

                });

            });
            
        });
    }
    
    
    GetInfo(id, APIKEY) {
        return new Promise((resolve, reject) => {

            let infoOPT = {
                qs: {
                    part: "snippet, contentDetails",
                    id: id,
                    maxResults: 1,
                    key: APIKEY
                },
                uri: "https://www.googleapis.com/youtube/v3/videos"
            };

            
            if (id.indexOf('list') != -1) {
                return this.GetListInfo(id, APIKEY).then(result => {return resolve(result)})
            };
            
            const url_regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            let URL = id.match(url_regex);
            if (URL != null) {
                infoOPT.qs.id = URL[7].trim();
            }

            request.get(infoOPT, (err, res, body) => {
                if (err) return resolve({error: err});
    
                let info = JSON.parse(body);
                if (info.items == '') return resolve([]);
                if (info.error) return resolve({error: info.error.errors[0]});
                info = {
                    snippet: info.items[0].snippet,
                    contentDetails: info.items[0].contentDetails,
                    id: info.items[0].id
                };
                
                let result = {
                    id: info.id,
                    title: info.snippet.title,
                    channel: info.snippet.channelTitle,
                    description: info.snippet.description,
                    duration: info.contentDetails.duration.substring(2).toLowerCase(),
                    thumbnail: info.snippet.thumbnails.default
                };
    
                return resolve(result);
            })
        });
    }

    GetListInfo(URL, APIKEY) {
        return new Promise((resolve, reject) => {

            let listOPT = {
                qs: {
                    part: "snippet, contentDetails",
                    playlistId: URL,
                    maxResults: 10,
                    key: APIKEY
                },
                uri: "https://www.googleapis.com/youtube/v3/playlistItems"
            }

            const url_regex = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
            let URL_ = URL.match(url_regex);
            if (URL_ != null) {
                if (URL_[2] == undefined) return resolve({error: {message: 'list id is empty!', reason: 'list_id_empty'}});
                listOPT.qs.playlistId = URL_[2];
            }


            request.get(listOPT, (err, res, body) => {

                if (err) return resolve({error: err});

                let listData = JSON.parse(body);
                if (listData.error) return resolve({error: listData.error.errors});
                if (listData.items == '') return resolve([]);

                let result = [];

                const resultNum = listData.pageInfo.resultsPerPage;
                let processedData = 0;
                listData.items.forEach((value, index) => {
                    
                    this.GetInfo(value.contentDetails.videoId, APIKEY).then(videoinfo => {
                        if (videoinfo.error) return resolve(videoinfo);

                        result[value.snippet.position] = videoinfo;
                        processedData += 1;

                        if (processedData == resultNum) return resolve(result);
                    });
                    
                });

            });
        });
    }
}

module.exports = new YoutubeAPI();

// xarC5jAiO7w