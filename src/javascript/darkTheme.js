const toggle = document.querySelector('.theme-mode');

let lightThemMode = localStorage.setItem('theme', 'light')




// function changeTheme() {
//     if (document.documentElement.dataset.theme == 'light') {
//         console.log('test')
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// }'const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');



function switchTheme(e) {
    let check = localStorage.getItem('theme');
    if (check == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log(check)
    } else if (check == "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

    }
}

if (toggle) {
    toggle.addEventListener('click', switchTheme, false);
}