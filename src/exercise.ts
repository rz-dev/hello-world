type Role = "admin" | "user";

type Person = {
  name: string;
  age: number;
  role: Role;
};

const people: Person[] = [
  { name: "Ada",   age: 36, role: "admin" },
  { name: "Bram",  age: 17, role: "user"  },
  { name: "Cleo",  age: 42, role: "user"  },
  { name: "Dara",  age: 29, role: "admin" },
  { name: "Evan",  age: 15, role: "user"  },
];

function adultAdminNames(people: Person[]): string[] {
  return people
    .filter((p) => p.role === "admin" && p.age >= 18)
    .map((p) => p.name);
}

console.log(adultAdminNames(people));

export {};
