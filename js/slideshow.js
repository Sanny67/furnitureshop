var myvar1, myvar2, myvar3, myvar4, myvar5, myvar6, myvar7, myvar8;
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
var time = 600;
var dining = ['images/TB2.jpg',
    'images/TB3.jpg',
    'images/TB1.jpg'
];
var kitchen = ['images/KT2.jpg',
    'images/KT3.jpg',
    'images/KT1.jpg'
];
var wadrobe = ['images/WD2.jpg',
    'images/WD3.jpg',
    'images/WD1.jpg'
];
var bed = ['images/BD2.jpg',
    'images/BD3.jpg',
    'images/BD1.jpg'
];
var door = ['images/DR2.jpg',
    'images/DR3.jpg',
    'images/DR1.jpg'
];
var office = ['images/OF2.jpg',
    'images/OF3.jpg',
    'images/OF1.jpg'
];
var cnfrnctbl = ['images/CT2.jpg',
    'images/CT3.jpg',
    'images/CT1.jpg'
];
var cntrtbl = ['images/TT2.jpg',
    'images/TT3.jpg',
    'images/TT1.jpg'
];
var sofas = ['images/SF2.jpg',
    'images/SF3.jpg',
    'images/SF1.jpg'
];
var sofacumbed = ['images/scb2.jpg',
    'images/scb3.jpg',
    'images/scb1.jpg'
];

// dining table
function startdining() {
    document.slide1.src = dining[a];

    if (a < (dining.length - 1)) {
        a++;
    }
    else {
        a = 0;
    }
    myvar1 = setTimeout("startdining()", time);
}
function stopdining() {
    clearTimeout(myvar1);
}
function resetdining() {
    document.slide1.src = 'images/TB1.jpg';
    a = 0;
    clearTimeout(myvar1);
}

document.getElementById("slide1").onmouseover = startdining;
document.getElementById("slide1").onmouseout = stopdining;
document.getElementById("slide1").onmouseout = resetdining;

// modular kitchen
function startkitchen() {
    document.slide2.src = kitchen[b];

    if (b < (kitchen.length - 1)) {
        b++;
    }
    else {
        b = 0;
    }
    myvar2 = setTimeout("startkitchen()", time);
}
function stopkitchen() {
    clearTimeout(myvar2);
}
function resetkitchen() {
    document.slide2.src = 'images/KT1.jpg';
    b = 0;
    clearTimeout(myvar2);
}

document.getElementById("slide2").onmouseover = startkitchen;
document.getElementById("slide2").onmouseout = stopkitchen;
document.getElementById("slide2").onmouseout = resetkitchen;

// wadrobe
function startwadrobe() {
    document.slide3.src = wadrobe[c];

    if (c < (wadrobe.length - 1)) {
        c++;
    }
    else {
        c = 0;
    }
    myvar3 = setTimeout("startwadrobe()", time);
}
function stopwadrobe() {
    clearTimeout(myvar3);
}
function resetwardrobe() {
    document.slide3.src = 'images/WD1.jpg';
    c = 0;
    clearTimeout(myvar3);
}

document.getElementById("slide3").onmouseover = startwadrobe;
document.getElementById("slide3").onmouseout = stopwadrobe;
document.getElementById("slide3").onmouseout = resetwardrobe;

// bed
function startbed() {
    document.slide4.src = bed[d];

    if (d < (bed.length - 1)) {
        d++;
    }
    else {
        d = 0;
    }
    myvar4 = setTimeout("startbed()", time);
}
function stopbed() {
    clearTimeout(myvar4);
}
function resetbed() {
    document.slide4.src = 'images/BD1.jpg';
    d = 0;
    clearTimeout(myvar4);
}

document.getElementById("slide4").onmouseover = startbed;
document.getElementById("slide4").onmouseout = stopbed;
document.getElementById("slide4").onmouseout = resetbed;

// door
function startdoor() {
    document.slide5.src = door[e];

    if (e < (door.length - 1)) {
        e++;
    }
    else {
        e = 0;
    }
    myvar5 = setTimeout("startdoor()", time);
}
function stopdoor() {
    clearTimeout(myvar5);
}
function resetdoor() {
    document.slide5.src = 'images/DR1.jpg';
    e = 0;
    clearTimeout(myvar5);
}

document.getElementById("slide5").onmouseover = startdoor;
document.getElementById("slide5").onmouseout = stopdoor;
document.getElementById("slide5").onmouseout = resetdoor;

// office
function startoffice() {
    document.slide6.src = office[f];

    if (f < (office.length - 1)) {
        f++;
    }
    else {
        f = 0;
    }
    myvar6 = setTimeout("startoffice()", time);
}
function stopoffice() {
    clearTimeout(myvar6);
}
function resetoffice() {
    document.slide6.src = 'images/OF1.jpg';
    f = 0;
    clearTimeout(myvar6);
}

document.getElementById("slide6").onmouseover = startoffice;
document.getElementById("slide6").onmouseout = stopoffice;
document.getElementById("slide6").onmouseout = resetoffice;

// conference table
function startcnfrnctbl() {
    document.slide7.src = cnfrnctbl[g];

    if (g < (cnfrnctbl.length - 1)) {
        g++;
    }
    else {
        g = 0;
    }
    myvar7 = setTimeout("startcnfrnctbl()", time);
}
function stopcnfrnctbl() {
    clearTimeout(myvar7);
}
function resetcnfrnctbl() {
    document.slide7.src = 'images/CT1.jpg';
    g = 0;
    clearTimeout(myvar7);
}

document.getElementById("slide7").onmouseover = startcnfrnctbl;
document.getElementById("slide7").onmouseout = stopcnfrnctbl;
document.getElementById("slide7").onmouseout = resetcnfrnctbl;

// centre table
function startcntrtbl() {
    document.slide8.src = cntrtbl[h];

    if (h < (cntrtbl.length - 1)) {
        h++;
    }
    else {
        h = 0;
    }
    myvar8 = setTimeout("startcntrtbl()", time);
}
function stopcntrtbl() {
    clearTimeout(myvar8);
}
function resetcntrtbl() {
    document.slide8.src = 'images/TT1.jpg';
    h = 0;
    clearTimeout(myvar8);
}

document.getElementById("slide8").onmouseover = startcntrtbl;
document.getElementById("slide8").onmouseout = stopcntrtbl;
document.getElementById("slide8").onmouseout = resetcntrtbl;

// sofas
function startsofas() {
    document.slide9.src = sofas[i];

    if (i < (sofas.length - 1)) {
        i++;
    }
    else {
        i = 0;
    }
    myvar9 = setTimeout("startsofas()", time);
}
function stopsofas() {
    clearTimeout(myvar9);
}
function resetsofas() {
    document.slide9.src = 'images/SF1.jpg';
    i = 0;
    clearTimeout(myvar9);
}

document.getElementById("slide9").onmouseover = startsofas;
document.getElementById("slide9").onmouseout = stopsofas;
document.getElementById("slide9").onmouseout = resetsofas;

// sofacumbed
function startsofacumbed() {
    document.slide10.src = sofacumbed[j];

    if (j < (sofacumbed.length - 1)) {
        j++;
    }
    else {
        j = 0;
    }
    myvar10 = setTimeout("startsofacumbed()", time);
}
function stopsofacumbed() {
    clearTimeout(myvar10);
}
function resetsofacumbed() {
    document.slide10.src = 'images/scb1.jpg';
    j = 0;
    clearTimeout(myvar10);
}

document.getElementById("slide10").onmouseover = startsofacumbed;
document.getElementById("slide10").onmouseout = stopsofacumbed;
document.getElementById("slide10").onmouseout = resetsofacumbed;