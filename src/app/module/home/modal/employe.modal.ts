export interface Employe {
    empId?  : number,
    name    : string,
    email   : string,
    mobile  : number,
    status? : 'Active' | 'Inactive' 
}
