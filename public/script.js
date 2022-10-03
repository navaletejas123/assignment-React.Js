
$(document).ready(function () {
    $(".personality").addClass("active-blue");
    $(".step").addClass("bg-lightblue");
    $(".step-header").addClass("active-blue");

});

$(".personality").click(function () {
    $(this).addClass("active-blue");
    $(this).removeClass('bg-lightblue');
    $('.step').addClass("bg-lightblue");
    $(".step-header").addClass("active-blue");
    $(".personality-header").removeClass("active-blue");
});

$(".step").click(function () {
    $(this).addClass("active-blue");
    $(this).removeClass('bg-lightblue');
    $('.personality').addClass("bg-lightblue");
    $(".step-header").removeClass('active-blue');
    $(".personality-header").addClass("active-blue");
});




var ex = 0;

// $('#add_new_expression').click(function () {
//     ex++;
//     var a = `<div class="set-expression border-bottom border-1 pb-3">
//     <h4>Expression ${ex}</h4>
//     <p class="msg"></p>
//     <div class="row">
//         <div class="col-8">
//             <button type="button" class="btn btn-outline-primary rounded-pill" disabled>Primary
//                 Dropdown</button>
//         </div>
//         <div class="col-4 d-flex align-items-center">
//             <p class=""><i class="bi bi-trash-fill mx-4 cp text-danger"></i></p>
//             <p class="cp">clear</p>
//         </div>
//     </div>
// </div>`
//     $(".expression").append(a);

//     var personality_text = $(".personality-text").val();
    
// });

$(document).on("click","#add_new_expression",function() {
    ex++;
    var a = `<div class="set-expression border-bottom border-1 pb-3">
    <h4>Expression ${ex}</h4>
    <p class="msg">message here</p>
    <div class="row">
        <div class="col-8">
            <button type="button" class="btn btn-outline-primary rounded-pill" disabled>Primary
                Dropdown</button>
        </div>
        <div class="col-4 d-flex align-items-center">
            <p class=""><i class="bi bi-trash-fill mx-4 cp text-danger"></i></p>
            <p class="cp">clear</p>
        </div>
    </div>
   </div>`
    $(".expression").append(a);

    var personality_text = $(".personality-text").val();
    console.log(personality_text);
    $('.msg').val(personality_text);
});