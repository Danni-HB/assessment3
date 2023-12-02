window.addEventListener("load", function(){
    //google**************************************************************************************************************************
	document.getElementById("sing-in-google").addEventListener("click", function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('account_email');
	firebase.auth().signInWithPopup(provider)
	.then(function(result){
		console.log("Logging sucessfully", result.user);

	})
	.catch(function(error){
		console.log("Logging fail", error)
	});
			});
	
    //Email****************************************************************************************************************************

	this.document.getElementById("sing-in-email").addEventListener("click", function (){
		alert("loggin with email and pass");
	});
	
    document.getElementById("sing-in-email").addEventListener("click", function(){

    var emailTxt = document.getElementById('account_email').value;
    var passtxt = document.getElementById('account_passwd').value;

    firebase.auth().signInWhitEmailAndPassword(emailTxt,passtxt)

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    console.log('Logging Sucessfully');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Logging fail', error);
    // ..
  });
});
    //Phone**************************************************************************************************************** */

    //+1 7785125697
    function getPhoneNumberFromUserInput(){
        return "+17785125697"
    }

    this.document.getElementById('sing-in-phone').addEventListener('click',function(){

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        
    const phoneNumber = getPhoneNumberFromUserInput();
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    alert(window.confirmationResult);
    const code = '123456';
    confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
      // ...
    }).catch((error) => {
        alert(error);
      // Error; SMS not sent
      // ...
    });

    });

    //Facebook******************************************************************

    document.getElementById("sing-in-facebook").addEventListener("click", function(){

        

    })


});
