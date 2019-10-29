import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [{
        id:1,
        title:"gin",
        imgUrl:"https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/279da33314daae33b5c118f327d5d8aa08d0c230/large.jpg?1471768439"
    },{
        id:2,
        title:"python",
        imgUrl:"https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a02fbc137334e63fa01e1df9b4dd0f8283a63ee8/large.jpg?1559694099"
    }],
    articleList:[{
        id:1,
        title:"Goはプログラミング言語の1つである",
        desc:"2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の\n" +
            "伝統に則ったコンパイル言語、メモリ安全性、ガベージコレクション、構造的型付け、CSPスタイルの並行性などの特徴を持つ。",
        imgUrl:"https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg"
    },{
        id:2,
        title:"Goはプログラミング言語の1つである",
        desc:"2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の\n" +
            "伝統に則ったコンパイル言語、メモリ安全性、ガベージコレクション、構造的型付け、CSPスタイルの並行性などの特徴を持つ。",
        imgUrl:"https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg"
    },{
        id:3,
        title:"Goはプログラミング言語の1つである",
        desc:"2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の\n" +
            "伝統に則ったコンパイル言語、メモリ安全性、ガベージコレクション、構造的型付け、CSPスタイルの並行性などの特徴を持つ。",
        imgUrl:"https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg"
    },{
        id:4,
        title:"Goはプログラミング言語の1つである",
        desc:"2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の\n" +
            "伝統に則ったコンパイル言語、メモリ安全性、ガベージコレクション、構造的型付け、CSPスタイルの並行性などの特徴を持つ。",
        imgUrl:"https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg"
    }],
    recommendList:[{
        id:1,
        imgUrl:"https://tpc.googlesyndication.com/simgad/5329228355675347908"
    },{
        id:2,
        imgUrl:"https://s3-ap-northeast-1.amazonaws.com/hodalog/wp-content/uploads/2019/03/20211955/golang-icach-700x467.png"
    }]
});

export default (state = defaultState, action)=>{
    switch(action.type) {
        default:
            return state
    }
}
