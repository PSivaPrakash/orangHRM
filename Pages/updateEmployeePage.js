export class UpdateEmployee
{
    constructor(page)
    {
        this.page = page
        this.selectEmployeeField = page.getByText('Siva').first()
    }

    async initiateUpdateEmployee()
    {
        await this.selectEmployeeField.click()
        await this.page.waitForLoadState('networkidle')
    }

    
}