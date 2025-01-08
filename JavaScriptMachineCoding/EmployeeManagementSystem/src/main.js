console.log("Hello World");
(async function () {
  const data = await fetch("./src/data.json");

  const res = await data.json();
  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  const createEmployee = document.querySelector(".createEmployee"); //ye button hai
  const addEmployeeModal = document.querySelector(".addEmployee"); //ye main div hai jismai form hai
  const addEmployeeForm = document.querySelector(".addEmployee_create"); //form

  createEmployee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  //Select Employee Logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
    if (e.target.tagName === "I") {
      // Check if the clicked element is an <i> tag (the delete icon)
      employees = employees.filter(
        (emp) => String(emp.id) !== e.target.parentNode.id
      );
      // Filter out the employee whose id matches the id of the parent element of the clicked <i> tag
      // This effectively removes the employee from the employees array

      if (String(selectedEmployeeId) === e.target.parentNode.id) {
        // Check if the id of the selected employee matches the id of the parent element of the clicked <i> tag
        selectedEmployeeId = employees[0]?.id || -1;
        // If the selected employee was deleted, update selectedEmployeeId to the id of the first employee in the updated employees array
        // If the employees array is empty, set selectedEmployeeId to -1

        selectedEmployee = employees[0] || {};
        // Update selectedEmployee to the first employee in the updated employees array
        // If the employees array is empty, set selectedEmployee to an empty object

        renderSingleEmployee();
        // Call the function to render the details of the selected employee
      }
      renderEmployees();
    }
  });

  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addEmployeeForm); //convert the form data to FormData
    console.log(formData);
    const values = [...formData.entries()];
    console.log("Value", values); //ye. hai array of array
    let empData = {};
    values.forEach((val) => {
      empData[val[0]] = val[1];
    });
    console.log(empData); //ye hai apna obj
    empData.id = employees[employees.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
    empData.imageUrl = empData.imageUrl;
    employees.push(empData);
    renderEmployees();
    addEmployeeForm.reset();
    addEmployeeModal.style.display = "none";
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (parseInt(selectedEmployeeId) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
        console.log(emp.id);
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
      employeeList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    if (selectedEmployeeId === -1) {
      employeeInfo.innerHTML = "";
      return;
    }

    employeeInfo.innerHTML = `<img src = "${selectedEmployee.imageUrl}"/>
    <span class="employees__single--heading">
    ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})</span>
    <span>${selectedEmployee.address}</span>
    <span>${selectedEmployee.email}</span>
    <span>Mobile - ${selectedEmployee.contactNumber}</span>
    <span>DOB - ${selectedEmployee.dob}</span>
    `;
  };

  if (selectedEmployee) renderSingleEmployee();
  renderEmployees();
})();
