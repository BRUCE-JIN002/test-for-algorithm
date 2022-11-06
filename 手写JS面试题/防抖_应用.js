//防抖
/**
 *防抖确保函数不会在上一次被调用之后一定量的时间内被执行。
 当必须进行一些费时的计算来响应快速派发的事件时（比如鼠标滚动或键盘事件时），防抖是非常有用的。
 下面这个例子以 250ms 的延迟来改变文本输入。
 */

import debounce from "lodash.debounce";

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.emitChangeDebounced = debounce(this.emitChange, 250);
    }

    componentWillUnmount() {
        this.emitChangeDebounced.cancel();
    }

    render() {
        return ( <
            input type = "text"
            onChange = { this.handleChange }
            placeholder = "Search..."
            defaultValue = { this.props.value }
            />
        );
    }

    handleChange(e) {
        // React pools events, so we read the value before debounce.
        // Alternately we could call `event.persist()` and pass the entire event.
        // For more info see reactjs.org/docs/events.html#event-pooling
        this.emitChangeDebounced(e.target.value);
    }

    emitChange(value) {
        this.props.onChange(value);
    }
}