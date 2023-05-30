window.addEventListener("load",function(){
    const contact1 = document.querySelector(".contact-col-1");
    const contact2 = document.querySelector(".contact-col-2");
    const contact3 = document.querySelector(".contact-col-3");
    const contact4 = document.querySelector(".contact-col-4");
    var clicks = document.querySelectorAll(".click");
    var listContact = document.querySelectorAll(".list-contact");
    function togglemen(){
        if(window.innerWidth <=768 ){
            contact1.classList.add("ordermobilelong");
            contact4.classList.add("ordermobilelong");
            contact2.classList.add("ordermobilesort");
            contact3.classList.add("ordermobilesort");
            contact2.classList.replace("order3","order2");
            contact3.classList.replace("order4","order3");
            contact4.classList.replace("order3","order4");
            clicks.forEach(function(click) {
                click.addEventListener("click", function(e) {
                    const target = e.currentTarget;
                    if (target.closest('.contact-infor').classList.contains('active')) {
                    target.closest('.contact-infor').classList.remove('active')
                    } else {
                    target.closest('.contact-infor').classList.add('active')
                    }
                  });
                });
        }else {
            contact1.classList.remove("ordermobilelong");
            contact4.classList.remove("ordermobilelong");
            contact2.classList.remove("ordermobilesort");
            contact3.classList.remove("ordermobilesort");
            contact2.classList.replace("order2","order3");
            contact3.classList.replace("order3","order4");
            contact4.classList.replace("order4","order3");
        }
    }
    window.addEventListener("resize", togglemen);
    togglemen();
});