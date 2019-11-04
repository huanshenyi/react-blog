## 動的ルーティング(ルーティングパラメータ伝達)

\react-blog\src\pages\home\components\List.js
```text:
 <Link key={index} to={'/detail/' + item.get("id")}>
```

\react-blog\src\App.js
```text
<Route path="/detail/:id" exact  component={Detail}></Route>
```

D:\program\react\react-blog\src\pages\detail\index.js
```text
 componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
```
