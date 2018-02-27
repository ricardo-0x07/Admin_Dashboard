
angular
.module('app')
.factory('AuthService', AuthService);

AuthService.$inject =['$state'];

function AuthService($state) {
     var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    return {
        error: false,
        users: [
            {username: "user", password: "password", email: "user@test.com"}
        ],
        login: function (item) {
            console.log('item', item);
            var user = this.users.find(function(user) {
                return user.username === item.username && user.password === user.password
            });
            if (user) {
                return $state.go('app.main', {}, { reload: true });
            }
            this.error = true;          
        },
        signup: function (user) {
            this.users.push(user);
        }
    }
}

