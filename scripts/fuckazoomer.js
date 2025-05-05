(function () {
  document.addEventListener(
    "wheel",
    (e) => {
      e.stopImmediatePropagation();
      return true;
    },
    { capture: true, passive: false }
  );
})();
