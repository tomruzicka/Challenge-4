let flag = true;

function myFunction() {
  const shareIcon = document.querySelector(".share-icon");
  const shareIconStyle = document.querySelector(".share-icon-style-js");
  const shareTooltip = document.querySelector(".share-tooltip");

  shareIcon.style.background = flag ? "hsl(214, 17%, 51%)" : "";
  shareIconStyle.style.fill = flag ? "hsl(210, 46%, 95%)" : "";
  shareTooltip.style.opacity = flag ? 1 : "";
  flag = !flag;

  let iconSvg = document.querySelector(".icon-svg");
  iconSvg.style.background = flag ? "" : "hsl(214, 17%, 51%)";
  iconSvg.style.borderRadius = flag ? "" : "50%";
}

const shareIconClick = document.querySelector("#share-icon-js");
shareIconClick.addEventListener("click", () => {
  myFunction();
});
