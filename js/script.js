function openTab(evt, tabName) {
    const panes = document.querySelectorAll('.tab-pane');
    const btns = document.querySelectorAll('.tab-btn');

    panes.forEach(p => p.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}