export interface Login {
    username : string,
    password : string
}

export interface LoginRequest {
    email    : string,
    password : string
}

export interface LoginResponse {
    token?    : string,
    error?    : string
}
