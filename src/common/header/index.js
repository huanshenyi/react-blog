import React from "react"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from "./style"

function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">ホーム</NavItem>
                <NavItem className="left">ダウンロード</NavItem>
                <NavItem className="right">ログイン</NavItem>
                <NavItem className="right">Aa</NavItem>
                <NavSearch></NavSearch>
            </Nav>
            <Addition>
                <Button className="writting">投稿する</Button>
                <Button className="reg">登録</Button>
            </Addition>
        </HeaderWrapper>
    )
}
export default Header;
