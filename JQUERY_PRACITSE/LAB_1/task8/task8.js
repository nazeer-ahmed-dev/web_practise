var val =  $("#picture2").css('margin')
$("#picture").hover(myfunction,myfunction1)
$("#picture").click(myfunction2)
function myfunction()
{
    $("#picture").attr("src","ryu_animated.gif")
}
function myfunction1()
{
    $("#picture").attr("src","ryu_stand_still.png")

}
function myfunction2()
{
    $("#picture2").css('margin',val)
    $("#picture").attr("src","ryu_hadouken_pose.png")
    $("#picture2").attr("src","hadouken.gif")
    for(let i=0;i<1;i++)
    {
        $("#picture2").animate({marginLeft:"+=800"})
    }


}


