/* DTO (Data Transfer Object)
   How data is struct */

export interface CreateUserDTO {
    id: number;
    username: string;
    email: string;
    phone?: string;
}

export interface Login {
    username: string;
    email: string;
}

export type PartialLogin = Partial<Login>