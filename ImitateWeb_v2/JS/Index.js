
/**
 * 倒计时数值转换显示
 * @param {number} 数值（例：输入8）
 * @return {number} 返回数值（例：返回08）
 */
function addnum(num){
        return num < 10 ? '0'+ num : num;  
    }
 
/**
 * 倒计时函数
 * @param {number} year 年
 * @param {number} month 月
 * @param {number} day 日
 * @param {number} hh 小时
 * @param {number} min 分
 * @param {number} ss 秒
 */
function ShowCountDown(year,month,day,hh,min,ss) { 
          var now = new Date(); 
          var endDate = new Date(year, month-1,day,hh,min,ss);
          var startime =now.getTime();
          var endtime=endDate.getTime();
          var leftsecond=(endtime - startime)/1000;
          if(leftsecond>0){
                var day1=Math.floor(leftsecond/(60*60*24));
                var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
                var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
                var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
                $("#countDowm-day").html(addnum(day1)+"天");
                $("#countDowm-hour").html(addnum(hour)+"小时");
                $("#countDowm-minute").html(addnum(minute)+"分");
                $("#countDowm-second").html(addnum(second)+"秒");  
          }
          else{
              $(".countLink").fadeIn(1500);         
          }
} 

/**
 * 回到顶部
 * @param {point} 
 */
 function GoTop(point){
             $("html,body").animate({"scrollTop":point},800)
 }
 /**
  *实时更新倒计时
 */
 function Countertime(){
                  window.setInterval(function(){
                        ShowCountDown(TargetTime[0],TargetTime[1],TargetTime[2],TargetTime[3],TargetTime[4],TargetTime[5]);

                        //回到顶部显示与隐藏
                        if ($(document).scrollTop()>800) {
                          $("#gotop").fadeIn(1000);
                        };
                        if ($(document).scrollTop()<800) {
                          $("#gotop").fadeOut(500);
                        };
                       
                }, interval); 

 }

/**
 * 入口函数
 * 1、初始化页面跳转到首页
 * 2、更新倒计时
 */
function Init(){
          GoTop(0);
          Countertime();
 }

/**
*页面导航跳转事件
*/
function MovePosition(){
        $("#gotop").click(function(){  
          GoTop(0);
        });
        $("#GohomePage").click(function(){
          var gohome=$("#homePage").offset().top;
          GoTop(gohome);
          return false;
        });
        $("#GosolutionDesign").click(function(){ 
          var goSD=$("#solutionDesign").offset().top-120;
          GoTop(goSD);
          return false;
        });
        $("#GoprojectDescription").click(function(){ 
        var goPD=  $("#projectDescription").offset().top-120;
        // var goPD=2410;
        // console.log(goPD);
        GoTop(goPD);
        return false;
        });
       $("#GoteamDescription").click(function(){ 
        var goPD=$("#teamDescription").offset().top-120;
        GoTop(goPD);
        return false;
        });
       $("#collapseBtn").click(function(){
        $("#collapsibleNavbar").toggle();
       });
       
}
//此处设定刷新倒计时间隔时间
var interval = 1000; 

// 此处设定目标时间
var TargetTime=[2018,3,3,21,22,11];

$(function(){
      Init();
       MovePosition();
});

  