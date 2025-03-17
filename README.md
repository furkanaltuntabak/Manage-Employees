# Employee Management System

This is a simple Employee Management System built with React. It allows users to manage employee records by adding, editing, and deleting employees. The application also includes pagination for better usability and stores employee data in Local Storage for persistence.

## Features

- **Add Employee**: Users can add new employees with details such as name, email, address, phone number, gender, and department.
- **Edit Employee**: Existing employee details can be updated.
- **Delete Employee**: Employees can be removed from the list.
- **Pagination**: The employee list is paginated for better navigation.
- **Local Storage**: Employee data is saved in Local Storage, ensuring persistence even after refreshing the page.

## Technologies Used

- React (Hooks: useState)
- Bootstrap (for styling)
- Local Storage (for data persistence)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/employee-management.git
   ```
2. Navigate to the project folder:
   ```sh
   cd employee-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm start
   ```

## Usage

1. Click on "Add New Employee" to open the modal form and add a new employee.
2. Use the edit button to modify existing employee details.
3. Use the delete button to remove an employee from the list.
4. Navigate through pages using the pagination controls.
5. Employee data will be saved in Local Storage automatically.
