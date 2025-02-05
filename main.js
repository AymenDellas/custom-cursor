// Select the custom cursor element
const cursor = document.querySelector(".cursor");

// Function to update cursor position based on mouse movement
const trackCursor = (e) => {
  cursor.style.transform = `translate(${
    e.clientX - cursor.clientWidth / 2
  }px, ${e.clientY - cursor.clientHeight / 2}px)`;
};

// Listen for mouse movement and update cursor position
document.addEventListener("mousemove", trackCursor);
