import cards from "./cards.json" assert { type: "json" };
const selectBlk = document.getElementById("select-blk");
const desBlk = document.getElementById("desc-blk");
const ascBlk = document.getElementById("asc-blk");
const searchBarBlk = document.getElementById("search-bar-blk");
const dropDownBlk = document.getElementById("drop-down-blk");
const arrowBlk = document.getElementById("arrow-icon-blk");
const labelBlk = document.getElementById("label-dd-blk");
const mountainList = document.querySelector(".mountains-blk");

// Template Rendered List
const templateRender = (image, title, description) => {
  return `<div class="mountain-detail-blk">
                <div class="mountain-img-blk">
                     <img class="sticker" src="./img/Sticker.png" />
                     <img src="${image}" />
                </div>
                <div>
                    <h1>${title}</h1>
                    <p>${description}</p>
                </div>
        </div>`;
};

// Render loop list
const renderMountains = cards
  .map((data) => {
    const { image, title, description } = data;
    return templateRender(image, title, description);
  })
  .join("");

// Search function
searchBarBlk.addEventListener("keyup", (e) => {
  const inputValue = e.target.value.toUpperCase();
  const filterCards = cards.filter((data) => {
    return data.title.toUpperCase().includes(inputValue);
  });
  mountainList.innerHTML = filterCards
    .map((data) => {
      const { image, title, description } = data;
      return templateRender(image, title, description);
    })
    .join("");
});

// Output rendered mountaing list
mountainList.innerHTML = renderMountains;

selectBlk.addEventListener("click", () => {
  dropDownBlk.classList.toggle("dd-inactive");
  arrowBlk.classList.toggle("arrow-active");
});

desBlk.addEventListener("click", () => {
  labelBlk.innerHTML = "Sort a Z - A";
  dropDownBlk.classList.toggle("dd-inactive");
  arrowBlk.classList.remove("arrow-active");
  // DESCENDING SORT
  const desSort = cards.sort((data1, data2) => {
    return data1.title > data2.title ? -1 : 1;
  });
  mountainList.innerHTML = desSort
    .map((data) => {
      const { image, title, description } = data;
      return templateRender(image, title, description);
    })
    .join("");
});

ascBlk.addEventListener("click", () => {
  labelBlk.innerHTML = "Sort a A - Z";
  dropDownBlk.classList.toggle("dd-inactive");
  arrowBlk.classList.remove("arrow-active");
  // ASCENDING SORT
  const ascSort = cards.sort((data1, data2) => {
    return data1.title < data2.title ? -1 : 1;
  });
  mountainList.innerHTML = ascSort
    .map((data) => {
      const { image, title, description } = data;
      return templateRender(image, title, description);
    })
    .join("");
});
