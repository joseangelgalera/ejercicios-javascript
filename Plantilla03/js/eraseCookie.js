"use strict";

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

