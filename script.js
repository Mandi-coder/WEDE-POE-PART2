// Ensure script executes only after HTML document tree finishes rendering completely
document.addEventListener("DOMContentLoaded", () => {

    // =========================================================================
    // FEATURE 1: INTERACTIVE MENU CATEGORY FILTER SWITCHER
    // =========================================================================
    const tabs = document.querySelectorAll(".tab-btn");
    const categories = document.querySelectorAll(".menu-category-group");
  
    // Conditional safeguard check ensures code doesn't crash on pages missing the menu elements
    if (tabs.length > 0 && categories.length > 0) {
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          // 1. Strip highlighted active states from all selection tab buttons
          tabs.forEach(t => t.classList.remove("active"));
  
          // 2. Add visual active state highlight status to the clicked option
          tab.classList.add("active");
  
          // 3. Hide all displayed food dish items container groupings
          categories.forEach(category => category.classList.remove("active-category"));
  
          // 4. Extract data-category identifier key name and reveal matching block section
          const targetCategory = tab.dataset("data-category");
          const activeContainer = document.getElementById(targetCategory);
  
          if (activeContainer) {
            activeContainer.classList.add("active-category");
          }
        });
      });
    }
  
    // =========================================================================
    // FEATURE 2: CONSULTATION CONTACT FORM FEEDBACK HANDLE
    // =========================================================================
    const consultationForm = document.querySelector(".consultation-form");
  
    if (consultationForm) {
      consultationForm.addEventListener("submit", (event) => {
        // Prevent browser standard action routine from fully reloading screen view
        event.preventDefault();
  
        // Collect field metadata details (ideal hook reference point for future custom email APIs)
        const clientName = document.getElementById("fullname")?.value || "there";
  
        // Display native visual validation prompt alerting user request went through safely
        alert(`Thank you, ${clientName}! Sne will review your event details and get back to you within 24 hours.`);
  
        // Reset entry boxes instantly back into blank pristine placeholders values
        consultationForm.reset();
      });
    }
  
});