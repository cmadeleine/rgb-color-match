
let r = 0;
let g = 0;
let b = 0;
let score = 0;
let step = 15;
let bkg_color;
let body_default;
let home = true;

function main() {

    bkg_color = rand_color();

    document.body.style.background = bkg_color;
    //document.getElementById("?").style.color = bkg_color;

    //setTimeout(function() {
    //                        document.getElementById("?").className = "" },
    //                        3000);

}

function rand_color() {

    if (0xFF % step != 0x0) {
        error('Invalid step');
    }

    let options = 0xFF / step;

    let r = Math.floor(Math.random() * options) * step;
    let g = Math.floor(Math.random() * options) * step;
    let b = Math.floor(Math.random() * options) * step;

    let color = (r << 16) + (g << 8) + b;

    r = hex_to_str(r);
    g = hex_to_str(g);
    b = hex_to_str(b);

    color = '#' + r + b + g;

    return color;

}

function dec_to_str(val) {

    let result = '';

    if (val < 100) {
        result += '0';
    }
    if (val < 10) {
        result += '0';
    }

    result += val.toString();
    return result;
}

function hex_to_str(val) {

    let result = '';

    if (val < 0x10) {
        result += '0';
    }

    result += val.toString(16);
    result = result.toUpperCase();
    return result;
}


function r_change(val) {

    if ((val == 1 && r < 255) || (val == -1 && r > 0)) {
        r += step * val;
    }

    update_hex();
}

function g_change(val) {

    if ((val == 1 && g < 255) || (val == -1 && g > 0)) {
        g += step * val;
    }

    update_hex();
}

function b_change(val) {

    if ((val == 1 && b < 255) || (val == -1 && b > 0)) {
        b += step * val;
    }

    update_hex();
}

function update_hex() {

    let result = '#';
    result += hex_to_str(r);
    result += hex_to_str(g);
    result += hex_to_str(b);

    set_colors(result);

    if (bkg_color == result) {
        setTimeout(function() { match()} , 100);
    }
    return result;
}

function match() {

    r = 0;
    g = 0;
    b = 0;
    score += 1;

    set_fade(true);
    //document.getElementById("info").className = "info fade_bkg";

    bkg_color = rand_color();
    document.body.style.background = bkg_color;

    //document.getElementById("?").style.color = bkg_color;

    set_colors(bkg_color);
    setTimeout(function() { update_hex() }, 1000);

    setTimeout(function() { set_fade(false); }, 
                            4100);

}

function set_colors(color) {

    //document.getElementById("info").style.background = color;

    document.getElementById("hex_val").style.color = color;
    document.getElementById("hex_val").textContent = color;

    document.getElementById("r_up").style.color = color;
    document.getElementById("r_val").firstElementChild.style.color = color;
    document.getElementById("r_val").firstElementChild.textContent = dec_to_str(r);
    document.getElementById("r_down").style.color = color;

    document.getElementById("g_up").style.color = color;
    document.getElementById("g_val").firstElementChild.style.color = color;
    document.getElementById("g_val").firstElementChild.textContent = dec_to_str(g);
    document.getElementById("g_down").style.color = color;

    document.getElementById("b_up").style.color = color;
    document.getElementById("b_val").firstElementChild.style.color = color;
    document.getElementById("b_val").firstElementChild.textContent = dec_to_str(b);
    document.getElementById("b_down").style.color = color;

}


function set_fade(val) {

    let fade_helper = function(element) {
        if (val) {
            element.className += " fade_txt";
        }
        else {
            element.className = element.className.replace(" fade_txt", "");
        }

    }

    //fade_helper(document.getElementById("?"));

    fade_helper(document.getElementById("hex_val"));

    fade_helper(document.getElementById("r_up"));
    fade_helper(document.getElementById("r_val").firstElementChild);
    fade_helper(document.getElementById("r_down"));

    fade_helper(document.getElementById("g_up"));
    fade_helper(document.getElementById("g_val").firstElementChild);
    fade_helper(document.getElementById("g_down"));

    fade_helper(document.getElementById("b_up"));
    fade_helper(document.getElementById("b_val").firstElementChild);
    fade_helper(document.getElementById("b_down"));

}



function info() {
    //document.getElementById("box_1").classList.toggle("hide");
    
}

