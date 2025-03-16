import { useState } from "react"

import Header from "./components/Header"
import AddEmployeeModal from "./components/AddEmployeeModal"
import EmployeeList from "./components/EmployeeList"
function App() {
    const [employees, setEmployees] = useState([{
        id: 1,
        name: "david Hardy",
        email: "thomashardy@mail.com",
        address: "89 Chiaroscuro Rd, Portland, USA",
        phone: "(171) 555-2222",
        gender: "male",
        department: "Finance"
    }])

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

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

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header onOpenAddModal={() => { setIsAddModalOpen(true) }} />
                <EmployeeList employees={employees} />
                <AddEmployeeModal isAddModalOpen={isAddModalOpen} closeAddModal={() => { setIsAddModalOpen(false) }} onAddEmployee={addEmployee} />

            </div>
        </div>
    )

}
export default App;