/* 	CREATE TABLE Users
    Id int primary key identity (1,1) not null,
	FirstName nvarchar (50) not null,
	LastName nvarchar (50) not null,
	Email nvarchar(60) not null,
	PasswordHash varbinary (128) null,
	PasswordSalt varbinary (128) null,
	Status bit not null,		
	 */

import { Byte } from "@angular/compiler/src/util";

export interface User{

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: Byte[];
    passwordSalt: Byte[];
    status: boolean;

}