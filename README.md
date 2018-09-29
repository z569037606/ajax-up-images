# ajax图片上传

## 引入js和css文件

```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<!--引入css和js-->
<script src="js/djzuploadimg.js"></script>
<link rel="stylesheet" href="css/djzuploadimg.css">
<!--引入css和js完毕-->
```

## 引入js方法

(!!!必须在$(function(){})里面引入下面两个方法)

```
<script>
    $(function(){
        //主要上传js  接收参数上传地址  返回值在php中返回一个数组['path1','path2',...],转成json
        djzupimg('/?c=upload&f=index');
        //如果需要克隆就调用这个方法，如果不需要就不用调;
        // djzclone(str,order)  方法接收两个参数，第一个参数接收html的字符串代码，跟着克隆一起复制，第二个参数是顺序，1代表放在内置克隆元素之前2代表后
        djzclone();
    })
</script>
```

## html调用

!!!放在form表单里面生效

```
<!--组件输出位置-->
<div id="djzupload"></div>
    <!--如果需要克隆就调用，如果不需要就不用调-->
<div id="djzclones">新增(样式可改)</div>
```