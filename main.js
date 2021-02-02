const studentList = [];
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const startBtn = document.querySelector("#startBtn");
const sortBtn = document.querySelector("#sortBtn");

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const showForm = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "startBtn") {
    document.querySelector("#studentForm").innerHTML = `<div id="studentForm">
    <form>
      <h1>Enter First Year's Name</h1>
      <div class="row mb-3">
      <label for="student-name" class="col-sm-2 col-form-label">Student:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control d-inline" id="studentName" required>
      </div>
      </div>
      <button type="button" class="btn btn-secondary" id="sortBtn">Sort!</button>
    </form>
  </div>`;
  }
  document.querySelector("#sortBtn").addEventListener("click", formContent);
};

// const formAlert = () => {
//   let domString = ``;
//   domString += 
//     `<div class="alert alert-warning alert-dismissible fade show" role="alert">
//        Please enter a name
//       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>`;
//   printToDom('blankFieldAlert', domString);
// };

const cardBuilder = (arr) => {
  let domString = " ";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">${arr[i].house}</p>
      <a href="#" class="btn btn-danger" id=${arr[i].id}>Expel</a>
    </div>
  </div>`;
  }

  printToDom("#studentList", domString);
};

const formContent = (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#studentName').value;
  const studentIds = studentList
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  if (nameInput === ``) {
    formAlert();
  } else {
    const newStudent = {
      name: nameInput,
      house: houses[Math.floor(Math.random() * houses.length)],
      id,
    };

    studentList.push(newStudent);
    cardBuilder(studentList);
    studentName.value = "";
  }
};

const expelButton = (e) => {

}

const buttonClick = () => {
  document.querySelector("#startBtn").addEventListener("click", showForm);
};

const init = () => {
  buttonClick();
  cardBuilder(studentList);
};

init();
