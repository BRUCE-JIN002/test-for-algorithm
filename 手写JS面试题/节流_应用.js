import throttle from "lodash.throttle";

//节流
//节流阻止函数在给定时间窗口内被调不能超过一次。
//下面这个例子会节流 “click” 事件处理器，使其每秒钟的只能调用一次
import throttle from "lodash.throttle";

class LoadMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickThrottled = throttle(this.handleClick, 1000);
    }

    componentWillUnmount() {
        this.handleClickThrottled.cancel();
    }

    render() {
        return <button onClick = { this.handleClickThrottled }
        value = { "Load More" }
        />;
    }

    handleClick() {
        this.props.loadMore();
    }
}