# Random 9gag post API
![Random 9gag Post](https://user-images.githubusercontent.com/17960677/99623827-f4579f00-2a52-11eb-85d7-914da5fed9bf.png)
>**Random 9gag post API**

## Example

```js
var rg = require("random-gag");
(async function() {
await rg(); //or, "await rg(gag_id)" to fetch specific post
})();
```

**Sample Output**

```js
{
  "id": "a8Gg8XV",
  "url": "http://9gag.com/gag/a8Gg8XV",
  "status": "0",
  "title": "Run!!!",
  "description": "",
  "type": "Animated",
  "version": 0,
  "nsfw": 0,
  "upVoteCount": 8012,
  "downVoteCount": 305,
  "totalVoteCount": 8317,
  "viewsCount": 0,
  "score": 0,
  "reportedStatus": 0,
  "creationTs": 1605591553,
  "albumWebUrl": "",
  "hasImageTile": 0,
  "postTile": {
    "h800": {
      "width": 640,
      "height": 1136,
      "images": [
        {
          "width": 640,
          "height": 800,
          "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_h800_offset0.jpg",
          "webpUrl": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_h800wp_offset0.webp"
        },
        {
          "width": 640,
          "height": 336,
          "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_h800_offset1.jpg",
          "webpUrl": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_h800wp_offset1.webp"
        }
      ]
    }
  },
  "promoted": 0,
  "isVoteMasked": 0,
  "sortTs": 1,
  "orderId": 0,
  "hasLongPostCover": 0,
  "images": {
    "image700": {
      "width": 460,
      "height": 816,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460s.jpg"
    },
    "image460": {
      "width": 460,
      "height": 816,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460s.jpg",
      "webpUrl": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460swp.webp"
    },
    "imageFbThumbnail": {
      "width": 220,
      "height": 220,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_fbthumbnail.jpg"
    },
    "image700ba": {
      "width": 460,
      "height": 816,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460s.jpg"
    },
    "image460sa": {
      "width": 460,
      "height": 816,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460s.jpg"
    },
    "image460sv": {
      "width": 460,
      "height": 816,
      "url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460sv.mp4",
      "hasAudio": 1,
      "duration": 14,
      "vp8Url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460svwm.webm",
      "h265Url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460svh265.mp4",
      "vp9Url": "https://img-9gag-fun.9cache.com/photo/a8Gg8XV_460svvp9.webm"
    }
  },
  "colors": {
    "placeholder": "#515562"
  },
  "sourceDomain": "",
  "sourceUrl": "",
  "externalUrl": "",
  "channel": "",
  "isVoted": "0",
  "userScore": 0,
  "creator": {
    "userId": "-1",
    "userName": "",
    "profileUrl": "",
    "avatarUrlSmall": ""
  },
  "commentsCount": 237,
  "fbShares": 0,
  "tweetCount": 0,
  "created": "",
  "comment": {
    "listType": "comment",
    "updateTs": 1605727239,
    "latestCommentText": "Deep down, we all know that he is running from a police"
  },
  "commentOpClientId": "",
  "commentOpSignature": "",
  "commentSystem": "comment-system",
  "topComments": {
    "comments": []
  },
  "targetedAdTags": {},
  "postSection": {
    "name": "Sport ",
    "url": "https://9gag.com/sport",
    "imageUrl": "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286774.0983_eGARyH_100x100.jpg",
    "webpUrl": "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286774.0983_eGARyH_100x100wp.webp"
  },
  "tags": [
    {
      "key": "Grant Holloway",
      "url": "https://9gag.com/tag/grant-holloway"
    }
  ]
}
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Unshorten.it

## Credits

* [9gag](https://9gag.com) For Creating an excellent platform.

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information

