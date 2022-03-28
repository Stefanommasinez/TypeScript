class User implements Person {
  id: number = 0;
  name: string = '';
  surname: string = '';
  age: number;
  dateOfBirth: string;
  address: Address = {
    city: '',
    street: '',
    postalCode: '',
  };
  role: Role = Role.admin;
  username: string = '';
  profilphoto: string = '';
  company: Companies[] = [];
  gender: Gender = Gender.male;

  getFullname() {
    return `${this.name} ${this.surname}`;
  }
};

enum Role {
  staff = 'staff',
  student = 'student',
  manager = 'manager',
  admin = 'admin',
};

enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
};

interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: Role;
  username: string;
  profilphoto: string;
  company: Companies[];
  gender: Gender;
};

interface Address {
  city: string;
  street: string;
  postalCode: string;
};

interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
};

const obj = {
  id: 3487,
  name: "Mario",
  surname: "Rossi",
  age: 25,
  dateOfBirth: "1995-14-12",
  address: {
    city: "Roma",
    street: "Via roma 10",
    postalCode: "00100",
  },
  role: Role.manager,
  username: "MarioRossi80",
  profilePhotoUrl: "https://bit.ly/3yRngEP",
  companies: [
    {
      id: 148979,
      name: "Develhope",
      description: "La migliore",
      location: {
        city: "Palermo",
        street: "Via Libertà 58",
        postalCode: "90139",
      },
    },
    {
      id: 123123,
      name: "Apple",
      description: "E insomma...",
      location: {
        city: "Cupertino",
        street: "One Apple Park Way",
        postalCode: "95014",
      },
    },
  ],
  gender: Gender.male,
};