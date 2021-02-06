const studentList = [];
const voldermortArmy = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const showForm = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "startBtn") {
    document.querySelector("#studentForm").innerHTML = `<div id="studentForm">
    <form>
      <h1 class="text-center">Enter First Year's Name</h1>
      <div class="row mb-3">
      <label for="student-name" class="col-sm-2 col-form-label">Student:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control d-inline" id="studentName" required>
      </div>
      </div>
      <button type="submit" class="btn btn-secondary" id="sortBtn">Sort!</button>
    </form>
  </div>`;
  }
  document.querySelector("#sortBtn").addEventListener("click", formContent);
};


const cardBuilder = (arr) => {
  let domString = " ";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card ${arr[i].house}" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">${arr[i].house}</p>
      <button class="btn btn-danger" id=${arr[i].id} type="button">Expel</button> 
    </div>
  </div>`;
  }

  printToDom("#studentList", domString);
};

const formContent = (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#studentName").value;
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const studentIds = studentList
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const formAlert = () => {
    let domString =
      `<div class="alert alert-warning alert-dismissible fade show" role="alert">
         Please enter a name
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      printToDom('#formAlert', domString);
  };

  if (nameInput === '') {
    formAlert();
    console.log(nameInput);
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
  const targetType = e.target.type;
  const targetId = Number(e.target.id);
  if (targetType === "button") {
    // this method returns the index of the object you are trying to remove in the array
    console.log(typeof targetId);
    const studentIndex = studentList.findIndex(student => student.id === targetId);
    let expelled = studentList.splice(studentIndex, 1);
    voldermortArmy.push(...expelled);
    console.log(studentIndex);
  }
  cardBuilder(studentList);
  armyBuilder(voldermortArmy);
};

const armyBuilder = (arr) => {
  let domString = " ";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">${arr[i].house}</p>
    </div>
  </div>`;
  }

  printToDom("#army", domString);
};

const buttonClick = () => {
  document.querySelector("#startBtn").addEventListener("click", showForm);
  document.querySelector("#studentList").addEventListener('click', expelButton);
};

const init = () => {
  buttonClick();
  cardBuilder(studentList);
};

init();
