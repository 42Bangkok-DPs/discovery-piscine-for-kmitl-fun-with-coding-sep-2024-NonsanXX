$(document).ready(function() {
    function highlightNavigation() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        $('section').each(function() {
            var topDistance = $(this).offset().top;
            var currentId = $(this).attr('id');

            if ((topDistance - 100) < scrollPosition) {
                $('nav a').removeClass('text-orange-500 hover:text-orange-400').addClass('text-gray-400 hover:text-white');
                $('nav a[href="#' + currentId + '"]').removeClass('text-gray-400 hover:text-white').addClass('text-orange-500 hover:text-orange-400');
            }
        });

        if (scrollPosition + windowHeight >= documentHeight - 50) {
            $('nav a').removeClass('text-orange-500 hover:text-orange-400').addClass('text-gray-400 hover:text-white');
            $('nav a[href="#contact"]').removeClass('text-gray-400 hover:text-white').addClass('text-orange-500 hover:text-orange-400');
        }
    }

    $(window).on('scroll', function() {
        highlightNavigation();
    });

    highlightNavigation();
});


document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.getElementById('social-links');
    const footer = document.querySelector('footer');

    function updateSocialLinks() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const footerPosition = footer.offsetTop;
        const threshold = 50;

        if (scrollPosition > footerPosition - threshold) {
            socialLinks.classList.add('left-0', 'bottom-0', 'w-full', 'bg-gray-800', 'py-4');
            socialLinks.classList.remove('left-4', 'bottom-4');
            socialLinks.querySelector('ul').classList.remove('flex-col', 'space-y-4');
            socialLinks.querySelector('ul').classList.add('flex-row', 'justify-center', 'space-x-4');
        } else {
            socialLinks.classList.remove('left-0', 'bottom-0', 'w-full', 'bg-gray-800', 'py-4');
            socialLinks.classList.add('left-4', 'bottom-4');
            socialLinks.querySelector('ul').classList.add('flex-col', 'space-y-4');
            socialLinks.querySelector('ul').classList.remove('flex-row', 'justify-center', 'space-x-4');
        }
    }

    window.addEventListener('scroll', updateSocialLinks);
    window.addEventListener('resize', updateSocialLinks);
    updateSocialLinks();
});