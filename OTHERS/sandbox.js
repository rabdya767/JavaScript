let user={
    name:`rabdya`,
    age:21,
    email:`rabdya@gmail.com`,
    position:'sde',
    login:function(name){
                    console.log(`${name} logged in successfully`);
    },
    logout: function(name){
                    console.log(`${name} logged out successfully`);
    }
};
//console.log(user);
user.login('rabdya');