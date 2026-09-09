(function () {
  "use strict";

  // Keep the inline word counts in sync with the visible text so they stay
  // accurate after content is edited.
  function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  document.querySelectorAll("[data-word-count]").forEach(function (counter) {
    var target = document.getElementById(counter.getAttribute("data-word-count"));
    if (target) {
      counter.textContent = countWords(target.textContent);
    }
  });

  // Accessibility hint for keyboard users on collapsible problem cards.
  document.querySelectorAll("details.problem-card").forEach(function (details) {
    var summary = details.querySelector("summary");
    if (summary) {
      summary.setAttribute("aria-expanded", details.open ? "true" : "false");
    }
    details.addEventListener("toggle", function () {
      var openState = details.open ? "true" : "false";
      details.querySelectorAll("summary").forEach(function (item) {
        item.setAttribute("aria-expanded", openState);
      });
    });
  });

  // Development aid: list any remaining placeholders in the browser console.
  var placeholders = Array.prototype.slice.call(document.querySelectorAll(".ph"));
  if (placeholders.length) {
    console.info(
      "This page still has " +
        placeholders.length +
        " content placeholders to fill. See PLACEHOLDERS.md for the checklist."
    );
  }
})();
