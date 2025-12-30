document.addEventListener("DOMContentLoaded", function () {

    const employee = {
        id: "EMP-1001",
        name: "John Doe",
        designation: "Software Engineer",
        department: "IT",
        email: "john.doe@company.com"
    };

    document.getElementById("empId").textContent = employee.id;
    document.getElementById("empName").textContent = employee.name;
    document.getElementById("empDesignation").textContent = employee.designation;
    document.getElementById("empDepartment").textContent = employee.department;
    document.getElementById("empEmail").textContent = employee.email;
});
