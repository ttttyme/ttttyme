$(function() {
  const arrayHeights = ["t1", "t2", "t3", "p1", "p2"];
  const arrayHover = ["p1", "p2"];
  for (var i = 0; i < arrayHeights.length; i++) {
    divHeights(arrayHeights[i]);
  }
  for (var i = 0; i < arrayHover.length; i++) {
    hoverElement(arrayHover[i]);
  }

  $(window).resize(function() {
    for (var i = 0; i < arrayHeights.length; i++) {
      divHeights(arrayHeights[i]);
    }
  });
});

function divHeights(element) {
  $(".l" + element).height("auto");
  $(".r" + element).height("auto");
  var lElement = $(".l" + element).height();
  var rElement = $(".r" + element).height();
  if (lElement < rElement) {
    $(".l" + element).height(rElement);
  } else if (lElement > rElement) {
    $(".r" + element).height(lElement);
  }
}

function hoverElement(element) {
  $(".l" + element).hover(
    function() {
      $(".l" + element).wrapInner("<span class='lHighlight'></span>");
      $(".r" + element).wrapInner("<span class='rHighlight'></span>");
    },
    function() {
      var innerLHighlight = $(".lHighlight").contents();
      var innerRHighlight = $(".rHighlight").contents();
      $(".lHighlight").replaceWith(innerLHighlight);
      $(".rHighlight").replaceWith(innerRHighlight);
    }
  );

  $(".r" + element).hover(
    function() {
      $(".l" + element).wrapInner("<span class='lHighlight'></span>");
      $(".r" + element).wrapInner("<span class='rHighlight'></span>");
    },
    function() {
      var innerLHighlight = $(".lHighlight").contents();
      var innerRHighlight = $(".rHighlight").contents();
      $(".lHighlight").replaceWith(innerLHighlight);
      $(".rHighlight").replaceWith(innerRHighlight);
    }
  );
}