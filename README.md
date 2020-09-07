# Youtube Search API
[![NPM info](https://nodei.co/npm/ytsearch_api.png)](https://www.npmjs.com/package/ytsearch_api)
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


ID값 또는 URL
Youtube.GetInfo("xarC5jAiO7w", key).then(result => {    // 영상 한개의 정보만
    console.log(result);
});

ID값 또는 URL
Youtube.GetListInfo("https://www.youtube.com/watch?v=xarC5jAiO7w&list=RDxarC5jAiO7w&start_radio=1", key).then(result => {   // Youtube 재생목록의 영상들 (최대 10개)
    console.log(result);
});
```

## 결과값
```
    {
        id: 'xarC5jAiO7w', // 비디오 ID
        title: 'ODESZA - A Moment Apart', // 비디오 제목
        channel: 'ODESZA', // 업로더 채널이름
        description: '...', // 영상 설명
        duration: '3m55s',  // 영상 길이
        thumbnail: {    // 영상 기본 썸네일
            url: 'https://i.ytimg.com/vi/xarC5jAiO7w/default.jpg',
            width: 120,
            height: 90
        }
    }

    모든 결과값은 배열에 담겨 리턴됩니다.
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
