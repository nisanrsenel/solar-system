document.addEventListener("DOMContentLoaded", function() {
    //Navigation Bar
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

    //Top Button
    var upside = document.getElementsByClassName("up")[0];

    if (upside) {
        window.addEventListener("scroll", function() {
            var distance = window.scrollY;
            if (distance > 300) {
                upside.classList.add("show");
            } else {
                upside.classList.remove("show");
            }
        });

        //Moves to top of page
        upside.addEventListener("click", function() {
            window.scrollTo(0, 0);
        });

        //Shows arrow sign with mouse movement
        upside.addEventListener("mousemove", function() {
            upside.innerHTML = "&#8673;";
        });
    } else {
        console.error("Element with class 'up' not found.");
    }
});
