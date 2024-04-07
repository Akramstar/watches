var liElements = document.querySelectorAll('.pagination .page-item');

liElements.forEach(function(li) {
    li.addEventListener('click', function() {
        liElements.forEach(function(item) {
            if (item!== this) {
                item.classList.remove('active');
            }
        });
        this.classList.add("active");
    });


    

}, this);