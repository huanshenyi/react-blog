import React, {Component} from "react"
import {
    DetailWrapper,
    DetailLeft,
    Header,
    Content,
    DetailRight,
    WriterWrapper
} from "./style";

class Detail extends Component{
    render() {
        return (
            <DetailWrapper>
                <DetailLeft>
                    <Header>Goはプログラミング言語の1つである</Header>
                    <Content>
                        <img src="https://uilicious.com/blog/content/images/size/w2000/2019/08/53pghgra05e674dgnkqq.png" alt=""/>
                        <p>2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の伝統に則ったコンパイル言語...</p>
                        <p>2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の伝統に則ったコンパイル言語...</p>
                        <p>2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の伝統に則ったコンパイル言語...</p>
                        <p>2009年、GoogleでRobert Griesemer、ロブ・パイク、ケン・トンプソンによって設計された。Goは、静的型付け、C言語の伝統に則ったコンパイル言語...</p>
                    </Content>
                </DetailLeft>
                <DetailRight>
                    <WriterWrapper>
                        <img src="https://tpc.googlesyndication.com/simgad/575115139343167132" alt=""/>
                    </WriterWrapper>
                </DetailRight>
            </DetailWrapper>
        )
    }
}
export default Detail
