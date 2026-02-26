$(function () {
  $('.menu-toggle').on('click', function () {
    $('.mobile-links').toggleClass('open');
  });

  $('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target && target !== '#' && $(target).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 60 }, 650);
      $('.mobile-links').removeClass('open');
    }
  });

  $('.faq-item button').on('click', function () {
    const $item = $(this).closest('.faq-item');
    $item.toggleClass('open');
    $item.siblings('.faq-item').removeClass('open');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section-fade').forEach((el) => io.observe(el));
});
