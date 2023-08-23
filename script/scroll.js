const menuItems = document.querySelectorAll(".menu-item");
const contents = document.querySelectorAll(".content");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Ẩn tất cả nội dung
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const target = menuItem.getAttribute("data-target");
    const contentToShow = document.getElementById(target);
    contentToShow.classList.add("active");
  });
});
