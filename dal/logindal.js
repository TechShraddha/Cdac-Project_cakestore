var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 

var Login = function (Login) {

    //Constructor
    
    this.email = Login.email;
    this.password = Login.password;

};

Login.createLogin = function (newLogin, result) {  
    console.log("New login to be validated ");
    console.log(newLogin);
        
        // let email = newLogin.email;
        // let password = newLogin.password;
        
        // var user = [ email, password ];
        // console.log(Loginvalues);

        var count=0;
        var userInfo=newLogin;
        var query="select * from customers";

        sql.query(query, function (err, data) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
                var stringdata=data;
                for(var i=0; i<stringdata.length;i++){
                    if(stringdata[i].email==userInfo.email && stringdata[i].password==userInfo.password)
                    {
                        count=1;
                        break;
                    }else{
                        count=0;
                    }
                }

                if(count==1){
                    console.log("verified Customer....Login Successful");
                    var LoginSuccessful="Verified Customer....Login Successful";
                    result(null, stringdata);
                }else{
                    console.log("Please Check login details, or Register yourself....Login Unsuccessful");
                    var Loginfailed="Login failed, Please Check login details, or Register yourself ";
                    result(null, Loginfailed);
                }
                
                
          }
        
                    
        });

};

module.exports=Login;