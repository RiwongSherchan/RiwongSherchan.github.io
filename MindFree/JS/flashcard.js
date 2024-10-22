// Function to show or hide the points of an article
function showPoints(pointsId) {
    const points = document.getElementById(pointsId);
    if (points.style.display === "block") {
        points.style.display = "none"; // Hide points
    } else {
        points.style.display = "block"; // Show points
    }
}
