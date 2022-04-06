/**
 *  DOM树的加载过程。
 * 
 *1. 在浏览器地址栏中输入url，交给DNS域名解析， 找到IP, 
    向服务器发起请求；(里面还有缓存，http协议，TCP...)
  2.  服务器返回数据， 浏览器接受文件 (html, css, js, img...)为二进制文件
        html: 二进制转换为 html (如：index.html)
        构建DOM树： HTML解析器
                 TOken -> Node -> DOM
                 Token词法解析， 根据"document"对象 <div></div>
                 Node: HTMLDivElement
                 DOM: DOM和标签几乎是一一对应的关系
        解析过程中：
                1. 遇到link的爱我不css样式，遇到css样式，会进行加载，并行index.css
                2. 遇到script标签的时候， 就会先去执行js的内容， 直至脚本执行完毕， 然后 继续构建DOM；
                底部引入JavaScript代码的原因： 或者说可以在头部引用， 
                但前提是加上async, defer或window.onload;
                    解析器遇到设置了 async属性的 script时候，开始下载脚本，并继续解析文档，
                    脚本会在它下载完后尽快执行， 但是解析器不会停下来等他它下载。
                    如果script标签设置了该属性， 则浏览器就会一步的下载该文件并且不会影响后续的DOM渲染；
                    如果存在多个设置了defer的script标签存在，则会啊按照顺序执行所有的script.
                    defer脚本会在文档渲染完后， DOMContentLoaded事件调用前执行；脚本会被延迟到整个页面
                    都解析完毕后再执行。
        构建CSS树： 
                1. css解析器
                每个css文件解析为样式表对象cssStyleSheet, 每个对象都包含CSSRule; 
                CSSRule包含选择器和声明对象，以及其他与CSS语法对应的对象。
                2. Token解析：css的词法及语法文法
                3. Node -> CSSOM
        构建Render树：  渲染树 = DOM树 + CSS树
        布局layout与绘制paint: 
                计算对象之间的大小，距离，确定每个结点在屏幕上的确切坐标； 
                映射浏览器屏幕绘制；使用UI后端层绘制每个结点。     
              reflow(回流)：当元素的属性发生改变且影响布局时，(高度， 宽度， 内外边距)， 
              产生回流， 相当于刷新页面。
              repaint(重绘): 当元素的属性发生改变且不影响布局时，(背景颜色，透明度， 字体样式)， 
              产生重绘不一定硬气回流， 回流必将引起重绘。 
 */