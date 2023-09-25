export default function createReportObject(employeesList) {
    let obj = {}
    return {
	allEmployees: for (const prop in employeesList) {
	    [obj.prop] = obj[prop]
	},
	getNumberOfDepartments: (employeesList) => {
	    return Object.keys(employeesList).length
	}
    }
}