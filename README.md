# Youtube Search API
유튜브 영상들을 검색, 정보를 얻어오는 라이브러리 입니다.

Youtube data api v3 기반으로
활성화된 구글 콘솔 API 키가 필요합니다.

## 사용법
```
const Youtube = require('youtubeSearch');

const key = "Y O U R  A P I  K E Y";

Youtube.SearchOnYoutube("A moment Apart", key).then(result => { // 검색(5개)
    console.log(result);
    
    {
        id: 'xarC5jAiO7w', // Video ID
        title: 'ODESZA - A Moment Apart', // Video Title
        channel: 'ODESZA', // Uploader ChannelName
        description: '⬡ ODESZA - A Moment Apart | Stream/Download ▶ http://odesza.co/a-moment-apart\n' +    // Video Description
        '⬡ Subscribe for more ODESZA releases ▶ http://odesza.co/youtube\n' +
        '⬡ Shop ODESZA store ▶ http://odesza.co/store\n' +
        '\n' +
        '⚠️Check out BRONSON the new project from ODESZA & Golden Features ⚠️\n' +
        'Stream/Download the first two tracks  ▶ http://brnsn.co/heartattack\n' +
        'Subscribe for new BRONSON releases ▶ http://brnsn.co/youtube\n' +
        'Pre-Order the new album ▶ http://brnsn.co\n' +
        'Shop the BRONSON store ▶ http://brnsn.co/store\n' +
        '\n' +
        '🔭 Follow ODESZA  🔭\n' +
        'Website: http://odesza.co/official\n' +
        'Facebook: http://odesza.co/facebook\n' +
        'Twitter: http://odesza.co/twitter\n' +
        'Instagram: http://odesza.co/instagram\n' +
        'Youtube: http://odesza.co/youtube\n' +
        'Snapchat: http://odesza.co/snapchat\n' +
        '\n' +
        '🎧 Listen to ODESZA 🎧\n' +
        'Spotify: http://odesza.co/spotify\n' +
        'Apple Music: http://odesza.co/apple-music\n' +
        'Soundcloud: http://odesza.co/soundcloud\n' +
        '\n' +
        '#odesza #electronicmusic #newmusic',
        duration: '3M55S',  // Video Duration
        thumbnail: {    // Video Default Thumbnail
            url: 'https://i.ytimg.com/vi/xarC5jAiO7w/default.jpg',
            width: 120,
            height: 90
        }
    }
});

Youtube.GetInfo("xarC5jAiO7w", key).then(result => {    // 영상 한개의 정보만
    console.log(result);
});
```