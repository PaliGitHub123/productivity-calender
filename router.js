/*const router = (event) => {
    event = event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "/index.html",
    "/calender": "/calender.html"
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = route[path];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html; 
}


window.onpopstate = handleLocation;
window.route = router;
handleLocation();*/