import { useState, useEffect, useMemo } from "react"
import Pagination from "./components/Pagination"
import Header from "./components/Header"
import AddEmployeeModal from "./components/AddEmployeeModal"
import EditEmployeeModal from "./components/EditEmployeeModal"
import EmployeeList from "./components/EmployeeList"





function App() {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [selectedEmployees, setSelectedEmployees] = useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const itemPerPage=3;



    const currentEmployees=useMemo(()=>{
        const indexOfLastEmployee=itemPerPage*currentPage
        const indexOfFirstEmployee=indexOfLastEmployee-itemPerPage
        return employees.slice(indexOfFirstEmployee,indexOfLastEmployee)
    },[employees,currentPage])
    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees])

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])
        console.log(employees)
    }
    function editClick(employee) {
        setIsEditModalOpen(true)
        setSelectedEmployee(employee)
    }
    function EditEmployee(updatedEmployee) {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        )
    }
    function deleteClick(employee) {
        console.log("deleted", employee)
        const confirmed = window.confirm("are you sure delete this")
        if (confirmed) {
            setEmployees(prevEmployees =>
                prevEmployees.filter(emp => emp.id !== employee.id)

            )
            setSelectedEmployees([])
        }
    }
    function deleteSelectedEmployees() {
        const confirmed = window.confirm("are you sure delete these")
        if (confirmed) {
            setEmployees(prevEmployees =>
                prevEmployees.filter(emp => !selectedEmployees.includes(emp.id))

            )
            setSelectedEmployees([])
        }
    }


    function handlePageChange(newPage) {
        setCurrentPage(newPage);
    }
    







    return (
        <div className="container">
            <div className="table-wrapper">
                <Header onOpenAddModal={() => { setIsAddModalOpen(true) }} onDeleteSelected={deleteSelectedEmployees}
                />
                <EmployeeList employees={currentEmployees} onEditClick={editClick} onDeleteClick={deleteClick} setSelectedEmployees={setSelectedEmployees} selectedEmployees={selectedEmployees} />
                <AddEmployeeModal isAddModalOpen={isAddModalOpen} closeAddModal={() => { setIsAddModalOpen(false) }} onAddEmployee={addEmployee} />
                <EditEmployeeModal
                    isEditModalOpen={isEditModalOpen}
                    employee={selectedEmployee}
                    onCloseEditModel={() => {
                        setIsEditModalOpen(false)
                        setSelectedEmployee(null)
                    }}
                    onEditEmployee={EditEmployee}
                />
                <div className="clearfix">
                    <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{employees.length}</b> entries</div>
                    <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(employees.length/itemPerPage)}
                    sayfaDegis={handlePageChange} 
                    />
                </div>
            </div>
        </div>
    )

}
export default App;