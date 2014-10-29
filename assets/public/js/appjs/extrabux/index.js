require(['text!template/planes/list.html'], function (listTemplate) {
	var $selectDate = $('#selectDate');
  var $planesListContainer = $('#planesListContainer');
  // 给datetab添加事件
  $('ul#selectDate>li').click(function(){
    var $this = $(this);
    var date = $this.attr('date');
    
    $.ajax({  
      type: "get",
      data: {date: date},
      dataType: 'json',
      url: "/extraData", 
      success: function(extraData){
        var render = artTemplate.compile(listTemplate);
        var viewRender = render({list: extraData});
        $planesListContainer.html(viewRender);
      }
    })
  }).eq(0).trigger('click');

});