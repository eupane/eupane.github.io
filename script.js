document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar-items a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = targetElement.getBoundingClientRect().top;
                
                window.scrollTo({
                    top: window.scrollY + offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
