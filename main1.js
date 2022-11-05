window.addEventListener("load", function() {
    const login = document.getElementById("login");
    const admin = document.getElementById("admin");

    login.style.display = "inline";
    admin.style.display = "none";

    main();
})

function main() {

    const name = "kouga";
    let na = null;
    const password = "abc123!";
    let pa = null;

    // Id
    
    const id = document.getElementById("id");
    const pass = document.getElementById("pass");
    const non = document.getElementById("non");

    // Id Button
    const btn = document.getElementById("btn");

    login.style.display = "inline";
    admin.style.display = "none";

    prot(name);
    prot(password);



    na = String(id.value);
    pa = String(pass.value);

    console.log(`id:${id.value}`);
    console.log(`pass:${pass.value}`);
    btn.classList.add('btn');

    prot(`na:${na}`);
    prot(`pa:${pa}`);



    
    btn.addEventListener("click", () => {
        if (na == name && pa == password) {
            console.log("click");
            console.log()
            console.log("login");
            login.style.display = "none";
            admin.style.display = "inline";
        } else {
            console.log("Don't login");
            non.textContent = "Don't login";
        }

    })

        
}


function prot(x) {
    console.log(x);
}