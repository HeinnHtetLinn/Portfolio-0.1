// Jquery 
$(document).ready(function(){
    $(".progress-bar").each(function(){
        $(this).animate({
            width:$(this).attr("aria-valuenow")+"%"
        },5000)
    })
})


// type.js
let typed = new Typed('.typing', {
    strings:['Web Designer','UI,UX Developer','Web Developer','Front-end Developer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
  });


//   window.sr = ScrollReveal({ reset: true });
//   sr.reveal('.projectcontainer',{duration:2000 })

// waypoint animate
$(document).ready(function(){
    $(".wp-1").waypoint(function(direction){
        $(".wp-1").addClass('animate__animated animate__slideInLeft')
    },{offset:'60%'})

    $(".wp-2").waypoint(function(direction){
        $(".wp-2").addClass('animate__animated animate__slideInRight')
    },{offset:'60%'})

    $(".wp-3").waypoint(function(direction){
        $(".wp-3").addClass('animate__animated animate__slideInRight')
    },{offset:'100%'})

    $(".wp-3-1").waypoint(function(direction){
        $(".wp-3-1").addClass('animate__animated animate__slideInLeft')
    },{offset:'100%'})

    $(".wp-4").waypoint(function(direction){
        $(".wp-4").addClass('animate__animated animate__rubberBand')
    },{offset:'50%'})
    $(".wp-4-1").waypoint(function(direction){
        $(".wp-4-1").addClass('animate__animated animate__zoomInDown')
    },{offset:'50%'})

    $(".wp-1-1").waypoint(function(direction){
        $(".wp-1-1").addClass('animate__animated animate__slideInLeft')
    },{offset:'50%'})

    $(".wp-2-1").waypoint(function(direction){
        $(".wp-2-1").addClass('animate__animated animate__slideInRight')
    },{offset:'50%'})
// text section
    $(".wp-text").waypoint(function(direction){
        $(".wp-text").addClass('animate__animated animate__zoomInUp')
    },{offset:'30%'})
    $(".wp-text1").waypoint(function(direction){
        $(".wp-text1").addClass('animate__animated animate__zoomInUp')
    },{offset:'40%'})
    $(".wp-text2").waypoint(function(direction){
        $(".wp-text2").addClass('animate__animated animate__zoomInUp')
    },{offset:'40%'})
    $(".wp-text3").waypoint(function(direction){
        $(".wp-text3").addClass('animate__animated animate__zoomInUp')
    },{offset:'40%'})
    $(".wp-text4").waypoint(function(direction){
        $(".wp-text4").addClass('animate__animated animate__tada')
    },{offset:'100%'})
    $(".wp-pj").waypoint(function(direction){
        $(".wp-pj").addClass('animate__animated animate__zoomInUp')
    },{offset:'50%'})

    
      

})



