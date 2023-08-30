const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const ulPointer = document.querySelector("ul");

function showBreadcrumbs() {
  generateBreadcrumbs(bc);
}
document.querySelector("button").addEventListener("mousedown", showBreadcrumbs);

function generateBreadcrumbs(bc) {
  bc.forEach((each) => {
    if (bc.indexOf(each) < 2) {
      ulPointer.innerHTML += `<li ><a href=${each.link}>${each.name}</a>  / </li>`;
    } else {
      ulPointer.innerHTML += `<a>${each.name}</a>`;
    }
  });
}
