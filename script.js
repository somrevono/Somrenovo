
function navigate(sectionId) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}
function startTuner() {
  alert("Afinador iniciado (modo simulado)");
}
document.addEventListener("DOMContentLoaded", () => {
  navigate("tuner");
});
