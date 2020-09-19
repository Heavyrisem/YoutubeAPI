# Youtube Search API
유튜브 영상들을 검색, 정보를 얻어오는 라이브러리 입니다.

Youtube data api v3 기반으로
활성화된 구글 콘솔 API 키가 필요합니다.

## 사용법
```
const Youtube = require('ytsearch_api');

const key = "Y O U R  A P I  K E Y";

Youtube.SearchOnYoutube("A moment Apart", key).then(result => { // 영상만 검색(5개)
    console.log(result);
    
});

Youtube.SearchAllYoutube("오킹", key).then(result => { // 영상,채널 검색(5개)
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
    SearchAllYoutube 리턴값
    {
        type: 'channel', // 결과값의 종류
        data: {
            id: 'UCom6YhUY62jM52nIMjf5_dw', // 채널 ID
            title: '오킹TV', // 채널 이름
            description: '...', // 채널 설명
            thumbnail: {    // 채널 프로필 이미지

                default: {
                    url: 'https://yt3.ggpht.com/-oH6-I9n6pBs/AAAAAAAAAAI/AAAAAAAAAAA/crQiKX0sCzg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
                },
                medium: {
                    url: 'https://yt3.ggpht.com/-oH6-I9n6pBs/AAAAAAAAAAI/AAAAAAAAAAA/crQiKX0sCzg/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
                },
                high: {
                    url: 'https://yt3.ggpht.com/-oH6-I9n6pBs/AAAAAAAAAAI/AAAAAAAAAAA/crQiKX0sCzg/s800-c-k-no-mo-rj-c0xffffff/photo.jpg'
                }

            }
        }
    },
    {
        type: 'video',
        data: {
            id: 'xarC5jAiO7w', // 비디오 ID
            title: 'ODESZA - A Moment Apart', // 비디오 제목
            channel: 'ODESZA', // 업로더 채널이름
            description: '...', // 영상 설명
            duration: '3m55s',  // 영상 길이
            thumbnail: {    // 영상 썸네일
            
                default: {
                    url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/hqdefault.jpg',
                    width: 480,
                    height: 360
                },
                standard: {
                    url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/sddefault.jpg',
                    width: 640,
                    height: 480
                },
                maxres: {
                    url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/maxresdefault.jpg',
                    width: 1280,
                    height: 720
                }

            }
        }
    }

    SearchOnYoutube 리턴값
    {
        id: 'xarC5jAiO7w', // 비디오 ID
        title: 'ODESZA - A Moment Apart', // 비디오 제목
        channel: 'ODESZA', // 업로더 채널이름
        description: '...', // 영상 설명
        duration: '3m55s',  // 영상 길이
        thumbnail: {    // 영상 썸네일
        
            default: {
                url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/default.jpg',
                width: 120,
                height: 90
            },
            medium: {
                url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/mqdefault.jpg',
                width: 320,
                height: 180
            },
            high: {
                url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/hqdefault.jpg',
                width: 480,
                height: 360
            },
            standard: {
                url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/sddefault.jpg',
                width: 640,
                height: 480
            },
            maxres: {
                url: 'https://i.ytimg.com/vi/5LgiiYaa96Q/maxresdefault.jpg',
                width: 1280,
                height: 720
            }

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