"use strict";

// function deletes typed info from table
function deleteTypedInfoFromTable(event) {
  document
    .querySelector("#cd_information_table")
    .removeChild(event.target.parentElement);
}

function addTypedInfoToTable(CDInfo) {
  // clone template
  const clone = document
    .querySelector("#cd_information_template")
    .cloneNode(true).content;

  // add typed info to the table
  clone.querySelector(".author").textContent = CDInfo.author;
  clone.querySelector(".title").textContent = CDInfo.title;
  clone.querySelector(".year").textContent = CDInfo.year;
  clone.querySelector(".delete").addEventListener("click", (event) => {
    deleteTypedInfoFromTable(event);
  });

  // appends template to the table
  document.querySelector("#cd_information_table").appendChild(clone);
}

function handleSubmissions(event) {
  event.preventDefault();

  // function gets the values
  const newCDInfo = {};
  newCDInfo.author = event.target.querySelector("#author").value;
  newCDInfo.title = event.target.querySelector("#title").value;
  newCDInfo.year = event.target.querySelector("#year").value;

  addTypedInfoToTable(newCDInfo);
}

// function listen for submissions
function loadAndWaitForSubmissions() {
  document
    .querySelector("#cd_information_form")
    .addEventListener("submit", (event) => handleSubmissions(event));
}

window.addEventListener("load", loadAndWaitForSubmissions());
