function getDataFromForm(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let form = {};

    formData.forEach((value, key) => {
        form[key] = value;
    })

    console.log(`🙈 🙉 🙊 ~ file: script.js:10 ~ form : `, form)
}

function validation(id) {
    const charOnly = /^[A-Za-z]+$/; //& Regex method . . .
    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const notOnlySpecialChar = /^(?![\W_]+$).+$/;
    let value = document.getElementById(id).value

    if (id === 'name') {

        if (value.length < 3 || value.length > 20 || !charOnly.test(value)) {
            document.getElementById(id).classList.add('error')
        } else {
            document.getElementById(id).classList.remove('error')
        }

    } else if (id === 'email') {
        if (!emailTest.test(value)) {
            document.getElementById(id).classList.add('error')
        } else {
            document.getElementById(id).classList.remove('error')
        }
    } else if (id === 'address') {
        if (!notOnlySpecialChar.test(value)) {
            document.getElementById(id).classList.add('error')
        } else {
            document.getElementById(id).classList.remove('error')
        }
    }
}