function showMessage() {
    // alert('Hey, you clicked me!');
    // alert('Hey, you clicked me again')
    // alert('Hey, stop!')
    // let x = 5;
    let name = 'james';
    let age = 21;
    let bonus = age + 5;
    let school = 'SADT';
    let message = "Hey " + name + ', your age is ' + age +
        ', you are qualified to be at ' + school
        + '. you have got a bonus at age ' + bonus;
    alert(message);
}

function checkAge() {
    let age = 17;
    if (age >= 18) {
        alert('Hey you can enter the party. you are old enough!')
    } else {
        alert('Hey you are too young.')
    }

}

function showMany() {
    for (let i = 0; i < 10; i++) {
        alert('i is ' + i)
    }
}

function changeColor() {
    document.getElementById("main").style.backgroundColor = 'grey'
}

function changeToDog() {
    document.getElementById("catdog").src = "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/bernese-mountain-dog.jpg?crop=1.00xw:0.667xh;0,0.213xh&resize=980:*"
}

function changeToCat() {
    document.getElementById("catdog").src = "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
    document.getElementById('catdog').alt = "a cat"
}
