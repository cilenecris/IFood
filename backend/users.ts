export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email == this.email &&
      another.password === this.password
    );
  }
}

export const users: { [ key: string ]: User } = {
  "oliveira@lucas.com": new User("oliveira@lucas.com", "Lucas", "lucas123"),
  "oliveira@cunha.com": new User("oliveira@cunha.com", "Cunha", "cunha123")
};
