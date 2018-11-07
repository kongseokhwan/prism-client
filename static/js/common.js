$(document).ready(function(){
    // $('.sidebar-toggle').click(function(){
    //     $('#wrap').toggleClass('fold');
    // });    
    // function setLayout() {
    //     // splitter
    //     var min = 350;
    //     var max = 480;
    //     var pagemin = 768;
    //     $('.resize-toolbar').mousedown(function (e) {
    //         e.preventDefault();
    //         $(document).mousemove(function (e) {
    //             var x = e.pageX - $('.left-panel').offset().left;
    //             if (x > min && x < max && e.pageX < ($(window).width() - pagemin)) {
    //             // if (x > min && x < max) {
    //                 $('.left-panel').css('width', x);
    //                 $('.sidebar-toggle').css('left', x);
    //                 $('.left-panel .sub-nav').css('width', x);
    //                 $('.resize-toolbar').css('left', x);
    //                 $('.right-panel').css('margin-left', x);
    //                 $('.header-nav-left').css('left', x);
    //                 $('.alarm-msg').css('padding-left', x);
    //             }
    //         })
            
    //     });
    //     $(document).mouseup(function (e) {
    //         $(document).unbind('mousemove');
    //     });
    // } 
        
    // $(window).resize(function() {
    //     setLayout();
    //     //scrollTable();

    //     /* 2018.06.19 전체 테이블에 대한 스크립트 추가*/
    //     //fullTableView();
    // }); 
    
    $(window).trigger('resize');
    
    $('.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
        $(this).toggleClass('open');
    });
    $('.tree-toggler').parent().children('ul.tree').toggle(0);
    
	'use strict';

	var bootstrapAccordionPanelFullHeight = function () {
		$('#accordion').each(function (i, obj) {
			var accordion = $(obj), // Get the main object
				parentHeight = accordion.parent().innerHeight(), // Get the height of the parent
				children = accordion.children('.panel.panel-default'), // Get the children of the parent
				headHeight = children.children('.panel-heading').first().outerHeight(), // Get the height of the panels' headers
				cnt = children.length, // Count the childrent
				freespace = (parentHeight - cnt * headHeight)-46; // Calculate the free space
//                freespace = parentHeight - cnt * headHeight; 

			children.children('.panel-collapse').each(function (i2, obj2) {
				$(obj2).children('.panel-body').css('height', freespace + 'px'); // Alter the height
			});
		});
	};

	// Call the sizer
	bootstrapAccordionPanelFullHeight();

	$(window).resize(bootstrapAccordionPanelFullHeight);  
    
    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.zmdi")
            .toggleClass('zmdi-chevron-down zmdi-chevron-right');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    
    $('.panel-open').click(function(){
        $('.panel-group').removeClass('open');
        $('.panel-group').addClass('open');        
    });
    
    $('.panel-close').click(function(){
        $('.panel-group').removeClass('open')
    })

});


/* alarm msg */
onResize = function(){
    var mrw = $('.header-nav-right').width();
    $('.alarm-msg').css('padding-right',mrw);
};
$(document).ready(onResize);
$(window).resize(onResize);

/* Layer Popup --------------------------------------------*/
function openPopup(e){
    $(e).addClass('on');
    popupPosition(e);
    noneScroll();
}
// 레이어 팝업 닫기 
function closePopup(e){
    $(e).parents('.layer').removeClass('on');
    noneScroll();
}
function closePopupOther(e){
    var $popup = $('.layer');
    if($popup.length){
        $('body').on('click',function(e){
            var $target = $(e.target);
            if($target.hasClass('layer')){
                $target.removeClass('on');
                noneScroll();
            }
        });
    }
}
//레이어 팝업 위치 정하기
function popupPosition(e){
    for (var i = 0; i < e.length; i++) {
        var $pop_wrap = $(e).find('.layer-wrap').eq(i);
        $pop_wrap.css({
          'top' : Math.max(0, (($(window).height() - $pop_wrap.outerHeight()) / 2)) + "px",
          'left' : Math.max(0, (($(window).width() - $pop_wrap.outerWidth()) / 2)) + "px"
        });
    }
}
// 레이어 팝업 오픈시 스크롤 막기
function noneScroll(){
    if($('.popup.on').length){
        if($('html').hasClass('ie8')){
          $('html,body').scrollTop(0);
        }
            window.setTimeout(function(){
              $('body').addClass('oh')
            }, 50);
        }else{
        $('body').removeClass('oh');
    }
}

/* table thead fixed */
//scroll Table
function scrollTable(){
    var $scroll = $('.x-scroll,.y-scroll');
    for (var i = 0; i < $scroll.length; i++) {
        var $table = $scroll.eq(i).find('table');
        var $table_width;
        var $td_array = new Array;
        var $col = $scroll.eq(i).find('colgroup').find('col');
        // set table layout auto
        $scroll.eq(i).addClass('load');
        if($scroll.eq(i).find('.thead,.tbody').length>0){
            // reset table
            var $thead_table = $scroll.eq(i).find('.thead').find('table');
            var $tbody = $scroll.eq(i).find('.tbody');
            $thead_table.unwrap();
            $thead_table.append($tbody.find('tbody'));
            $tbody.remove();
        }else{
            // fix col width
            if($scroll.eq(i).hasClass('x-scroll')){
                for (var j = 0; j < $col.length; j++) {
                    if(!isNaN(parseInt($col.eq(j).attr('width')))){
                        $col.eq(j).addClass('fix');
                    }
                }
            }
        }
        // set col width before wrap
        if($scroll.eq(i).hasClass('x-scroll')){
            var $td = $table.find('tr:first-child').find('td');
            for (var j = 0; j < $td.length; j++) {
                var $td_width;
                if($col.eq(j).hasClass('fix')){
                    $td_width = $col.eq(j).attr('width');
                }else{
                    $td_width = Math.ceil($td.eq(j).outerWidth()) + 'px';
                }
                $col.eq(j).attr('width', $td_width);
                // get width
                $td_array[j] = parseInt($td_width);
            }
        }
        // wrap '.thead', '.tbody'
        if(!$scroll.eq(i).find('.thead,.tbody').length>0){
            var $thead = $scroll.eq(i).find('table').clone();
            var $tbody = $scroll.eq(i).find('table').clone();
            $scroll.eq(i).children('table').remove();
            $scroll.eq(i).append($thead).append($tbody);
            $thead.wrap('<div class="thead"></div>').find('tbody').remove();
            $tbody.wrap('<div class="tbody"></div>').find('thead').remove();
        }
        // get width
        $table_width = $td_array.reduce(function(a, b) { return a + b; }, 0);
        // set width
        if($scroll.eq(i).hasClass('x-scroll')){
            if($scroll.eq(i).outerWidth() >= $table_width){
                $scroll.eq(i).find('.thead,.tbody').css('width','100%');
            }else{
                $scroll.eq(i).find('.thead,.tbody').css('width',$table_width);
            }
        }
        // set table fixed
        $scroll.eq(i).removeClass('load');
    }
}

/* 한 페이지에 한 테이블이 가득 찬 화면인 경우 */
function fullTableView()
{
    /* 해당 클래스가 존재하지 않는 경우 */
    if(!$(".full_table").length > 0)
    {
        return;
    }

    /* 테이블의 높이를 현재 화면에 맞게 디스플레이 한다. */
    $(".full_table .tbody").addClass("full_table_size");

    /* 테이블 스크롤만 남기기 위해 body 스크롤을 감춘다. */
    $("body").css({"overflow-y":"hidden"});
}