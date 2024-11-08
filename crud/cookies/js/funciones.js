"use strict";

async function fetchData(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await response.json();
        data.results.forEach(item => {
            const name = item.name.first;
            const value = item.dob.age;
            addRowToTable(name, value);
            setCookie(name, JSON.stringify({ value }), 1/1440); 
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function addRowToTable(name, value) {
    const row = dataTable.insertRow();
    const cellName = row.insertCell(0);
    const cellValue = row.insertCell(1);
    const cellActions = row.insertCell(2);

    cellName.textContent = name;
    cellValue.textContent = value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
        deleteCookie(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    const updateButton = document.createElement("button");
    updateButton.textContent = "Actualizar";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", function() {
        document.getElementById("cookieName").value = name;
        document.getElementById("cookieValue").value = value;
        deleteCookie(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    cellActions.appendChild(deleteButton);
    cellActions.appendChild(updateButton);
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function loadCookies() {
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
        const [name, value] = cookie.split("=");
        if (name && value) {
            const { value: parsedValue } = JSON.parse(value);
            addRowToTable(name, parsedValue);
        }
    });
}