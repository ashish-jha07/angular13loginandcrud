export interface Employe {
    empId?  : number,
    name    : string,
    email   : string,
    mobile  : number,
    status? : 'Active' | 'Inactive' 
}


export interface User {
    avatar?       : number,
    first_name    : string,
    last_name     : string,
    email         : string,
    id            : number,
}

export interface UserListrequest {
    page_Number : number,
    per_Page    ?: number
}

export interface UserListresponse {
    page           : number;
    per_page       : number;
    total          : number;
    total_pages    : number
    data           : User[];
}

