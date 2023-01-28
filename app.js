function createButtons(name = "All") { //! Defaul parametre olarak All veriyoruz
  let btn = document.createElement("button");
  btn.className = "btn btn-outline-dark";
  btn.innerText = name;
  btn.onclick = changeMenu;
  return btn;
}


let buttonContainer = document.querySelector(".buttonContainer");

let uniqueCategory = [...new Set(foods.map(element => element.category))];

uniqueCategory.unshift("All");

console.log(uniqueCategory);

uniqueCategory.map(category => buttonContainer.append(createButtons(category)));


function createMenuItems(item) {
  let items = `
  <div class="menu-items col-lg-6 col-sm-12">
    <img
      class="photo"
      src="${item.img}"
      alt="${item.title}"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
</div>
  `;

  return items;
}

const menuList = document.querySelector(".menuContainer");

foods.forEach(item => {
  menuList.innerHTML += createMenuItems(item);
});

function changeMenu() {
  menuList.innerHTML = "";

  if(this.innerText === "All"){

    foods.forEach(menu => {
      menuList.innerHTML += createMenuItems(menu);
    })
  }

  else {
    let filter = foods.filter(element => element.category === this.innerText);

    filter.forEach(menu => {
      menuList.innerHTML += createMenuItems(menu);
    })
  }
}