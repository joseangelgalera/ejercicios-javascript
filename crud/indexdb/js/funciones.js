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
            setIndexedDB(name, age, email); 
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
        deleteIndexedDB(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    const updateButton = document.createElement("button");
    updateButton.textContent = "Actualizar";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", function() {
        document.getElementById("indexedDBName").value = name;
        document.getElementById("indexedDBAge").value = age;
        document.getElementById("indexedDBEmail").value = email;
        deleteIndexedDB(name);
        dataTable.deleteRow(row.rowIndex - 1);
    });

    cellActions.appendChild(deleteButton);
    cellActions.appendChild(updateButton);
}

function setIndexedDB(name, age, email) {
    var transaction = db.transaction(["data"], "readwrite");
    var objectStore = transaction.objectStore("data");
    var request = objectStore.put({ name: name, age: age, email: email });

    request.onsuccess = function(event) {
        console.log("Data saved to IndexedDB");
    };

    request.onerror = function(event) {
        console.error("Error saving data to IndexedDB: " + event.target.errorCode);
    };
}

function deleteIndexedDB(name) {
    var transaction = db.transaction(["data"], "readwrite");
    var objectStore = transaction.objectStore("data");
    var request = objectStore.delete(name);

    request.onsuccess = function(event) {
        console.log("Data deleted from IndexedDB");
    };

    request.onerror = function(event) {
        console.error("Error deleting data from IndexedDB: " + event.target.errorCode);
    };
}

function loadIndexedDBData() {
    var transaction = db.transaction(["data"], "readonly");
    var objectStore = transaction.objectStore("data");
    var request = objectStore.openCursor();

    request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            addRowToTable(cursor.value.name, cursor.value.age, cursor.value.email);
            cursor.continue();
        }
    };

    request.onerror = function(event) {
        console.error("Error loading data from IndexedDB: " + event.target.errorCode);
    };
}