import { useState } from "react";
function AddEmployeeModal({ isAddModalOpen, closeAddModal, onAddEmployee }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        department: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    function handleSubmit(e) {
        e.preventDefault();
        onAddEmployee(formData);
        closeAddModal();
        setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
        })
    }
    function handleCancel() {
        closeAddModal();
        setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
        })
    }

    if (!isAddModalOpen) return null
    return (
        <>
            <div id="addEmployeeModal" className="modal fade show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button onClick={closeAddModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea
                                        className="form-control"
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> gender </label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === "male"}
                                                onChange={handleChange} />
                                            male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === "female"}
                                                onChange={handleChange} />
                                            female
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <div>

                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Department</option>
                                            <option value="Finance" >Finance</option>
                                            <option value="HR" >HR</option>
                                            <option value="Development" >Development</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={handleCancel} type="button" className="btn btn-default"  >Cancel</button>
                                <button type="submit" className="btn btn-success" >Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className='modal-backgrop fade show'></div>
        </>
    )
}
export default AddEmployeeModal;