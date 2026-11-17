// Keep the current section when switching languages; links also work without JavaScript.
document.querySelectorAll('.language-switch').forEach(function (link) {
  link.addEventListener('click', function () {
    var target = new URL(link.href);
    target.hash = window.location.hash;
    link.href = target.href;
  });
});
