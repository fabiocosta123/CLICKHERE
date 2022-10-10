const handleClick = () => {
  const body = $("body");
  body.html(`
    <h1>HELLO JAVASCRIPT!</h1>
    <h2> and Hello World!</h2>`);

  body.css("background-color", "#000");
  body.css("color", "#fff");
};

$(document).ready(() => {
  const el = $("#btn-start");
  el.on("mouseover", () => {
    el.css("position", "absolute");
    el.css("top", `${Math.floor(Math.random() * (window.innerHeight - 18))}px`);
    el.css(
      "left",
      ` ${Math.floor(Math.random() * (window.innerWidth - 36))}px`
    );
  });
  el.on("click", () => {
    handleClick();
  });
});
