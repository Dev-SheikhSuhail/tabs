const buttons = document.querySelectorAll(".tab-btn");
const contentDivs = document.querySelectorAll(".content");
//Click events to each tab button.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Deactivate any previously active elements.
    // Remove selected(active class) from other buttons and content.
    buttons.forEach((btn) => btn.classList.remove("active"));
    contentDivs.forEach((contentDiv) => contentDiv.classList.remove("active"));

    //Get the target content ID from the clicked button.
    //Retrieve the unique identifier of the clicked button from its data-id. attribute.
    const id = button.dataset.id;
    //Show the clicked content.
    const element = document.getElementById(id);
    element.classList.add("active");
    button.classList.add("active"); // Add "active" class to the clicked button
  });
});
