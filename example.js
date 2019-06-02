var str = 'str';
var a = {
    str: 'a-a',
    b: function() {
        console.log(this);
    },
    c:function() {
        console.log(this.str);
    },
    d:function(){
        setTimeout(function() {
            console.log('setTimeout1:',this.str);
        }, 0);

        setTimeout(() => {
            console.log('setTimeout2:',this.str);
        }, 0);
    },

}

var temp1 = a.b;
var temp2 = a.c;
a.b();      /// 输出a 
a.c();      /// 输出a-a
temp1();    /// 输出window  
temp2();    /// 输出str
a.d();      /// setTimeOut1: str , setTimeOut2: a-a
