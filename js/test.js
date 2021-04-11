document.getElementById("månBtn").addEventListener("click", showMan);

document.getElementById("testBtn").addEventListener("click", showTis);

let mån_schedule = document.getElementById("måndag");

let tis_schedule = document.getElementById("tisdag");

let ons_schedule = document.getElementById("onsdag");

/* JS för schedule,html mobil format */

function showMan(){

    if (tis_schedule.style.display === 'inline-block') {
        tis_schedule.style.display = 'none'
    }

    if (ons_schedule.style.display === 'inline-block'){
        ons_schedule.style.display = 'none'
    }

    if (mån_schedule.style.display === 'inline-block') {
        mån_schedule.style.display = 'none'
    } else {
        mån_schedule.style.display = 'inline-block'
    }

}

function showTis(){

    if (mån_schedule.style.display === 'inline-block') {
        mån_schedule.style.display = 'none'
    }

    if (ons_schedule.style.display === 'inline-block'){
        ons_schedule.style.display = 'none'
    }

    if (tis_schedule.style.display === 'inline-block') {
        tis_schedule.style.display = 'none'
    } else {
        tis_schedule.style.display = 'inline-block'
    }

}
