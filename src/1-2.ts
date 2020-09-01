const showUserInfo = (user: User) => {
  void user;
};

type User = {
  name: string;
  age: number;
  private: boolean;
};

showUserInfo({
  name: "John Smith",
  age: 16,
  private: false,
});

// @ts-expect-error
showUserInfo({
  name: "Mary Sue",
  private: false,
});
// @ts-expect-error
const usr: User = {
  name: "Gombe Nanashino",
  age: 100,
};
