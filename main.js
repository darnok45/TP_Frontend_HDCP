function cambiarFondo() {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    if (toggle) {
        let checked = toggle.checked;
        document.body.classList.toggle('dark', checked);

        if (checked) {
            label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}
