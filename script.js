/**function toggleSkills(category) {
    let element = document.getElementById(category);
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});**/

function toggleSkills(category) {
    var section = document.getElementById(category);
    section.style.display = section.style.display === "block" ? "none" : "block";
}
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});