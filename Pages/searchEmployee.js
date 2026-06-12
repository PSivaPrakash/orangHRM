
export class SearchEmployee {
    constructor(page) {
        this.page = page;
        this.employeeNameField = page.getByPlaceholder("Type for hints...").first()
        this.searchEmployeeButtonField = page.getByRole('button', { name: ' Search ' })
        
    }

    async searchEmployee(employeeData) {
        await this.employeeNameField.fill(employeeData.employee.middleName)
        await this.searchEmployeeButtonField.click()
     
    }

}