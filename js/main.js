document.getElementById("res_button").addEventListener("click", showRes);

document.getElementById("tav_button").addEventListener("click", showTav);

document.getElementById("verk_button").addEventListener("click", showVerk);

let res_notis = document.getElementById("resultat");

let tav_notis = document.getElementById("tavlingar");

let verk_notis = document.getElementById("verksamhet");

if (res_notis.style.display !== "block") {
    res_notis.style.display = "block"
}

/* variabler för schedule */

function showRes(){

    if (tav_notis.style.display === "block") {
        tav_notis.style.display = 'none'
    }

    if (verk_notis.style.display === "block") {
        verk_notis.style.display = 'none'
    }

    if (res_notis.style.display === "block") {
        res_notis.style.display = 'none'
    } else {
        res_notis.style.display = "block"
    }
        
}

function showTav(){

    if (res_notis.style.display === "block") {
        res_notis.style.display = 'none'
    }

    if (verk_notis.style.display === "block") {
        verk_notis.style.display = 'none'
    }

    if (tav_notis.style.display === "block") {
        tav_notis.style.display = 'none'
    } else {
        tav_notis.style.display = "block"
    }
        
}

function showVerk(){

    if (res_notis.style.display === "block") {
        res_notis.style.display = 'none'
    }

    if (tav_notis.style.display === "block") {
        tav_notis.style.display = 'none'
    }

    if (verk_notis.style.display === "block") {
        verk_notis.style.display = 'none'
    } else {
        verk_notis.style.display = "block"
    }
        
}

/* JS för schedule,html mobil format */

function showMån(){

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