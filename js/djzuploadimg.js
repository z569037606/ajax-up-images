function djzclone(str='',order=1) {
    $('#djzclones').click(function() {
        //克隆上传
        var obj=$('.djzone').eq(0).clone(true);
        //清除克隆后的对应数据
        if(order==1){
            $('#djzupload').append(str);
        }
        obj.find('.picDis').html('');
        $('#djzupload').append(obj);
        if(order==2){
            $('#djzupload').append(str);
        }
    })
}
function djzupimg(djzurl){
    $('#djzupload').html('<div class="djzone"> <span class="djzxztp"> <span class="djzyuan"> <span class="djzheng"></span> <span class="djzshu"></span> </span>添加图片 </span> <input class="djzxuanze" type="file"  djzfile="djzfile" multiple> <div class="picDis"> </div> </div>');


    $('.djzxztp').click(function () {
        //触发input文件选择打开
        var num=$(this).index('.djzxztp');
        $(".djzxuanze").eq(num).trigger("click");
    })
    $('[djzfile=djzfile]').change(function(){
        var obj=$(this);
        var forms=new FormData($('#forms')[0]);
        for(var i=0;i<$(this)[0].files.length;i++){
            if($(this)[0].files[i].type.indexOf('image')===-1){
                alert('请选择图片!');
                return false;
            }
            forms.append('file'+i,$(this)[0].files[i]);
        }
        $.ajax({
            url: djzurl,
            type: 'POST',
            data: forms,
            //这两个设置项必填
            contentType: false,
            processData: false,
            success:function(res){
                var ress= $.parseJSON(res);
                var str='';
                var strs='';
                for(k in ress){
                    str+='<div class="djzpics"> <span class="djzdelpic">×</span> <img src="/'+ress[k]+'" alt=""></div>';
                    strs+='<input type="text" class="djzfilepath" name="filepath[]" hidden value="'+ress[k]+'">';
                }
                obj.siblings('.picDis').html(str);
                obj.parents('form').append(strs);
                $('.djzdelpic').off('click');
                $('.djzdelpic').click(function(){
                    var djznums=$(this).index('.djzdelpic');
                    $('.djzfilepath').eq(djznums).remove();
                    $('.djzpics').eq(djznums).remove();
                })
            }
        })
    })
};
