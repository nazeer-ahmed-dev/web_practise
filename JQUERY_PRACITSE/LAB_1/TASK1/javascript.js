function hideme()
{
    $("#pic_hide").hide(500)
}
//backgroundchange
function change()
{
    let val1 = $("#i_1").val()
    let val2 = $("#i_2").val()
    let val3 =$("#i_3").val()
    $("#backgroundchange").css("background-color", "rgb("+val1+","+val2+","+val3)

}