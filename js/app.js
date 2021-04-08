/* Click filter - portfolio */
$( () => {  // Можно напписать так или $(() => { }) или так $( function() { });-$(document).ready(())

    let filter = $("[data-filter]");     //Сохр. элементы с data-filter, по которым будем отслеживать клик

    filter.on("click", function(event) {   // По клику на элементы с атрибутом ( [data-filter] ) мы будем что-то делать
        event.preventDefault();       // Убираем стандартное поведенее ссылки, при клике перебрось на верх сайта
            
        let cat = $(this).data('filter'); // При клике на data-filter(this) атрибут, будем получать значение после filter=""
        
        if(cat == "all") {
            
            $("[data-category]").removeClass("hide");
            $("[data-category]").removeClass("show");
            $("[data-category]").fadeOut("slow","swing");
            
            setTimeout( () =>  $("[data-category]").fadeOut("slow","swing"),500);
            setTimeout( () => $("[data-category]").fadeIn("slow","swing"),600);
   
        } else {
            $("[data-category]").each( function() { // Проходимся по всем data-category
            
                let workCat = $(this).data("category"); // Сохраняем все значения data-category(this) в переменную
    
                if(workCat != cat) {       // Если значение из переменной workCat != значению cat
                    $(this).addClass("hide"); // Тогда мы добавляем им класс "hide" который будет скрывать дургое
                    $(".hide").fadeOut("slow","swing");
                    $(this).removeClass("show"); // Тогда мы добавляем им класс "hide" который будет скрывать дургое
                    // Тогда мы добавляем им класс "hide" который будет скрывать дургое
                }else {
                    $(this).removeClass("hide"); // Иначе, если workCat == cat, то мы удаляем у них класс hide
                    $(this).addClass("show"); // Иначе, если workCat == cat, то мы удаляем у них класс hide
                    $(".show").fadeOut("slow","swing");

                        setTimeout( () => $(".show").fadeIn("slow","swing"),600 );
                } 
            }); 
        }
    });

/* Show modals - modal */
    let showModal = $("[data-show]");

    showModal.on("click", function(event) {
        event.preventDefault();

        let show = $(this).data("show");

        $("[data-modal]").each( function() {
            let modal = $(this).data("modal");
            if(show == modal) {
                $(this).fadeIn("slow","swing");
                $("body").addClass("scroll__off");
            }
            else {
                let close = $("[data-exit]");

                close.on("click", function() {
                    $("body").removeClass("scroll__off");
                    $(".modal").fadeOut("slow","swing");
                    $(this).fadeOut("slow","swing");
                    setTimeout( () => $(this).fadeIn("slow","swing")); 
                });
            }
            
        });
    });

/* Click outside and hide modal - modal__dialog */
    $(document).mouseup( function(e) {
        let clickOut = $(".modal__dialog");

        if(!clickOut.is(e.target) && clickOut.has(e.target).length === 0) { // Если .modal__dialog не будет таргетом
            $(".modal").fadeOut("slow","swing");                            // И не явл. потомками .modal__dialog
            $("body").removeClass("scroll__off");

        }
    });
});

/* Scroll event - about */
$(window).scroll( function() {

    let scrollDown = $("[data-scrollDown]").offset().top;
    if($(this).scrollTop() > scrollDown - 607 && $(this).scrollTop() < scrollDown + 100 ) {
        
        $(".about__bigtitle").addClass("hover__on");  

        setTimeout( () => $(".about__bigtitle").addClass("hover__off"),600);
        
    }else {
        $(".about__bigtitle").removeClass("hover__on")
        $(".about__bigtitle").removeClass("hover__off")
    }
});