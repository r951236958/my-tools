if (location.hash === "") {
  svg4everybody();
} else if (location.hash === "#fill") {
  svg4everybody({
    polyfill: true
  });
} else if (location.hash === "#oldie") {
  svg4everybody({
    nosvg: true,
    polyfill: true
  });
}

function addSVG(node, href) {
  node.innerHTML =
    "<" +
    'svg role="presentation"' +
    "><" +
    'use xlink:href="' +
    href +
    '"/' +
    "><" +
    "/svg" +
    ">";
  node.parentNode.replaceChild(node.lastChild, node);
}

$(function() {
  $("[data-toggle='tooltip']").tooltip();

  var clipboard = new ClipboardJS(".btn-clipboard");
  clipboard.on("success", function(e) {
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);

    e.clearSelection();
  });

  clipboard.on("error", function(e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });

  //Get the button
  var mybutton = document.getElementById("gototop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});

function usingSelectorOption() {
  return $("#use-selector").is(":checked");
}

function updateCodeView() {
  $("#with-selector-code").toggle(usingSelectorOption());
  $("#without-selector-code").toggle(!usingSelectorOption());
}

$(function() {
  // Update code view when checkbox is toggled
  updateCodeView();
  $("#use-selector").click(function() {
    updateCodeView();
  });

  var startedDemo = false;
  $("#add-button").click(function() {
    // One-time initialization
    if (!startedDemo) {
      if (usingSelectorOption()) {
        $("body").popover({
          selector: ".has-popover"
        });
      } else {
        $(".has-popover").popover();
      }

      startedDemo = true;
    }

    // Disable selector checkbox, put a tooltip on it, and show the buttons panel
    $("#use-selector").attr("disabled", "disabled");
    $("#use-selector-label span").tooltip();
    $(".buttons").show();

    // Add a new button that triggers (or doesn't) a popover, with the appropriate message
    var button = null;
    if (usingSelectorOption()) {
      button = $(
        '<button class="btn btn-block btn-success has-popover" data-title="Dynamic" data-content="This button was added dynamically by JavaScript" data-placement="top">Working dynamically added button</button>'
      );
    } else {
      button = $(
        '<button class="btn btn-block btn-default has-popover" data-title="Dynamic" data-content="This button was added dynamically by JavaScript" data-placement="top">Non-working dynamically added button</button>'
      );
    }

    button.appendTo(".buttons");
  });
});

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

var googleUser = {};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(
    element,
    {},
    function(googleUser) {
      document.getElementById("name").innerText =
        "Signed in: " + googleUser.getBasicProfile().getName();
    },
    function(error) {
      alert(JSON.stringify(error, undefined, 2));
    }
  );
}

 $(document).ready(function(){
   $('.sidenav').sidenav();
   $('.dropdown-trigger').dropdown();
   $(".tabs").tabs();
   $(".collapsible").collapsible();
   $('.tooltipped').tooltip();
  });