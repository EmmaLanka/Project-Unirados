function closeMenu(el) {
  let toggler = document.getElementById('menu-toggle');
  console.log(toggler);
  toggler.click()
  smoothScroll(el, 150)
}
function scrollToElem(el) {
  smoothScroll(el, 150)
}
function getTop (element, start) {
  if (element) {
    return element.getBoundingClientRect().top + start
  } else {
    return start
  }
}
function smoothScroll (scrollTo, offset) {

  let requestAnimationFrame;

  const easeInOutCubic = t => t < 0.5 ? 16 * t * t * t * t * t  : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  if (!requestAnimationFrame) {
    requestAnimationFrame = window.requestAnimationFrame || (fn => window.setTimeout(fn, 16))
  }

  const startPoint = window.scrollTop || window.pageYOffset;
  const end = this.getTop(scrollTo, startPoint) - offset;

  const clock = Date.now();
  const step = () => {
    // The time elapsed from the beginning of the scroll
    const elapsed = Date.now() - clock;
    // Calculate the scroll position we should be in
    const scrolling = elapsed < 1000;
    const position = scrolling ? startPoint + (end - startPoint) * easeInOutCubic(elapsed / 1000) : end;

    if (scrolling) {
      requestAnimationFrame(step);
    }

    window.scrollTo(0, position);
  }
  step()
}

$('.contacts-form__row button').on('click', function (e) {
  e.preventDefault();
  $('.contact-modal__overlay').show();
  $('.contact-modal').show();
  $('.body').css('height','100%');
  $('.body').css('overflow','hidden');
});
$('.js-close-modal').on('click', function () {
  $('.contact-modal__overlay').hide();
  $('.contact-modal').hide();
  $('.body').css('height','');
  $('.body').css('overflow','');
});
