interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const baba: Admin = {
  dbId: 121,
  email: "hkm@gmail.com",
  userId: 2333,
  role: "admin",
  gitHubToken: "gitHub",
  startTrail: () => {
    return "Trail has been started";
  },
  getCoupon: (name: "hkm", off: 10) => {
    return 10;
  },
};

export {};
