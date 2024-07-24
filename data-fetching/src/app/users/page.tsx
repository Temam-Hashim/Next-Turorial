import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { resolve } from "path";
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UsersObject = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

async function Users() {
  await new Promise((resolve)=>setTimeout(resolve,2000))
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
//   console.log(users);
  return (
    <>
      <h1 className="text-center m-3 font-bold text-lg">Users List</h1>
      <hr />
      <div className="grid grid-cols-2 gap-2 p-2">
        {users.map((user: UsersObject) => (
          <div className="flex justify-between items-center bg-white shadow rounded-lg p-4" key={user.id}>
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm">{user.username}</p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="text-md text-blue-600">{user.email}</div>
              <div className="text-md">{user.phone}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <Table>
        <TableCaption>A list of Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Name</TableHead>
            <TableHead className="font-medium">Username</TableHead>
            <TableHead className="font-medium">Email</TableHead>
            <TableHead className="font-medium">Address</TableHead>
            <TableHead className="font-medium">Phone</TableHead>
            <TableHead className="font-medium">Website</TableHead>
            <TableHead className="font-medium">CompanyName</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(( user : UsersObject) => (
            <TableRow>
              <TableCell >{user.name}</TableCell>
              <TableCell >{user.username}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >
                {user.address?.street}
              </TableCell>
              <TableCell >{user.phone}</TableCell>
              <TableCell >{user.website}</TableCell>
              <TableCell >
                {user.company?.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  );
}

export default Users;
