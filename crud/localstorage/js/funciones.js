"use strict";

async function fetchData(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await response.json();
        data.results.forEach(item => {
            const name = item.name.first;
            const age = item.dob.age;
            const email = item.email;
            addRowToTable(name, age, email);
            setLocalStorage(name, age, email); 
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function addRowToTable(name, age, email) {
    const row = dataTable.insertRow();
    const cellName = row.insertCell(0);
    const cellAge = row.insertCell(1);
    const cellEmail = row.insertCell(2);
    const cellActions = row.insertCell(3);

    cellName.textContent = name;
    cellAge.textContent = age;
    cellEmail.textContent = email;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
        deleteLocalStorage(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    const updateButton = document.createElement("button");
    updateButton.textContent = "Actualizar";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", function() {
        document.getElementById("storageName").value = name;
        document.getElementById("storageAge").value = age;
        document.getElementById("storageEmail").value = email;
        deleteLocalStorage(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    cellActions.appendChild(deleteButton);
    cellActions.appendChild(updateButton);
}

function setLocalStorage(name, age, email) {
    const userData = { age, email };
    localStorage.setItem(name, JSON.stringify(userData));
}

function deleteLocalStorage(name) {
    localStorage.removeItem(name);
}

function loadLocalStorageData() {
    for (let i = 0; i < localStorage.length; i++) {
        const name = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(name));
        addRowToTable(name, userData.age, userData.email);
    }
}