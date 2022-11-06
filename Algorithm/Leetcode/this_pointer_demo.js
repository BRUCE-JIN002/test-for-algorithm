let name = 'global'

const obj = {
    name: 'obj',
    test: function() {
        let name = 'scope';
        console.log(this.name);
    }
}
const test = obj.test;

test(); //undefined: 此时this指针指向全局对象，全局没有名为test的方法,所以结果为undefined
obj.test(); //obj: 如果在一个对象上使用点或者方括号来访问属性或方法，这个对象就成了 this