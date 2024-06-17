interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type PartialUser = {
  [k in keyof User]?: User[k];
};

function updateUser(id: number, updates: PartialUser): User {
  return {} as User;
}
