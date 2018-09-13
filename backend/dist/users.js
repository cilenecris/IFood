"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email == this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "oliveira@lucas.com": new User("oliveira@lucas.com", "Lucas", "lucas123"),
    "oliveira@cunha.com": new User("oliveira@cunha.com", "Cunha", "cunha123")
};
