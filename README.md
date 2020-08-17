# Youtube Search API
유튜브 영상들을 검색, 정보를 얻어오는 라이브러리 입니다.

Youtube data api v3 기반으로
활성화된 구글 콘솔 API 키가 필요합니다.

## 사용법
```
const Youtube = require('ytsearch_api');

const key = "Y O U R  A P I  K E Y";

Youtube.SearchOnYoutube("A moment Apart", key).then(result => { // 검색(5개)
    console.log(result);
    
});

Youtube.GetInfo("xarC5jAiO7w", key).then(result => {    // 영상 한개의 정보만
    console.log(result);
});
```

## 결과값
```
    {
        id: 'xarC5jAiO7w', // Video ID
        title: 'ODESZA - A Moment Apart', // Video Title
        channel: 'ODESZA', // Uploader ChannelName
        description: '...', // Video Description
        duration: '3M55S',  // Video Duration
        thumbnail: {    // Video Default Thumbnail
            url: 'https://i.ytimg.com/vi/xarC5jAiO7w/default.jpg',
            width: 120,
            height: 90
        }
    }
```

## 이외의 오류

```
    error: {
        message: 'The request is missing a valid API key.',
        domain: 'global',
        reason: 'forbidden'
    }
```
오류는 내부적으로 처리되지 않고 그대로 error 객체에 담겨 반환됩니다.


https://developers.google.com/youtube/v3/docs/errors