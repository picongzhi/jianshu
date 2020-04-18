import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '《让岁月变成诗》名人语录',
      desc: ' 梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '细读《挪威的森林》',
      desc: '《挪威的森林》，村上春树的代表作。因它的名气特别响亮，特定网购了一本，放在书架上放好几个月了，最近才有时间打开阅读。 花了六天时间读完，基本上是...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15517692-7a1b517edb1eff6d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  return state
}
