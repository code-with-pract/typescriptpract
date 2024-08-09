// class User {
//   public email: string;
//   private name: string;
// //   #name: string;
//   readonly city: string = "Rewa";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const sanju = new User("S@gmail.com", "Baba");
// hitesh.city = "Bhopal"
// sanju.name

//////////
class User {
  //   private _courseCount = 1;
  protected _courseCount = 1;

  readonly city: string = "Rewa";
  constructor(
    public email: string,
    public name: string // private userid: string
  ) {}

  private tokenDeleted() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more then 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const sanju = new User("S@gmail.com", "Baba");
// sanju.tokenDeleted()
