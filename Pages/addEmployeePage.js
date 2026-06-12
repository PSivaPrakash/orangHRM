import { generateRandomNumber } from '../Utility/randomNumber.js'

export class Pim {
    constructor(page) {
        this.page = page;
        this.pimClickField = page.getByText('PIM')
        this.addEmployeeButton = page.getByRole('button', { name: ' Add ' })
        this.profilePictureField = page.getByAltText('profile picture');
        this.employeeFirstNameField = page.getByPlaceholder("First Name")
        this.employeeMiddleNameField = page.getByPlaceholder("Middle Name")
        this.employeeLastNameField = page.getByPlaceholder("Last Name")
        this.employeeIdField = page.locator('input[class="oxd-input oxd-input--active"]').last()
        this.saveEmployeeField = page.getByRole('button', { name: ' Save ' })
    }

    async pimTab() {
        await this.pimClickField.click()
        await this.page.waitForLoadState('networkidle')
    }

    async initiateNewEmployee() {
        await this.addEmployeeButton.click()
    }

    async employeesData(employeeData) {
        let randomNumber = generateRandomNumber()
        // await this.profilePictureField.click()
        // await this.profilePictureField.setInputFile('test_data/image_0.jpg')
        await this.employeeFirstNameField.fill(employeeData.employee.firstName)
        await this.employeeMiddleNameField.fill(employeeData.employee.middleName)
        await this.employeeLastNameField.fill(employeeData.employee.lastName)
        await this.employeeIdField.fill(`${employeeData.employee.empId}${randomNumber}`)


    }

    async saveEmployee() {
        await this.saveEmployeeField.click()
        await this.page.waitForLoadState('networkidle')

    }
}