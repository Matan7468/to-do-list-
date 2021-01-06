const signin = document.getElementById("signin");
  const signup = document.getElementById("signup");
  const myForm = document.getElementById("myForm");
  const header = document.getElementById("header");

  signin.addEventListener("click", signinClick);
  signup.addEventListener("click", signupClick);

  const myStorage = window.localStorage;


  function signupClick(e){
    console.log("signup");
    document.getElementById("mainPage").style.visibility = "hidden";
    header.innerHTML = "sign up";
    const fname = document.createElement("input");
    fname.setAttribute("placeholder", "first name");
    const lname = document.createElement("input");
    lname.setAttribute("placeholder", "last name");
    const email = document.createElement("input");
    email.setAttribute("placeholder", "email");
    const password = document.createElement("input");
    password.setAttribute("placeholder", "password");
    password.setAttribute("type", "password");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const submit = document.createElement("input");
    submit.setAttribute("value", "submit");
    submit.setAttribute("type", "button");
    myForm.appendChild(fname);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(lname);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(email);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(password);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(checkbox);
    myForm.append("I agree to the Terms of Use");
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(submit);

    submit.addEventListener("click", () =>{
      myStorage.setItem(email.value, fname.value + ", " + lname.value + ", " + email.value + ", " + password.value);
      Dashboard();
    });
}
      
  
  function signinClick(e){
    console.log("signin");
    document.getElementById("mainPage").style.visibility = "hidden";
    header.innerHTML = "sign in";
    const email = document.createElement("input");
    email.setAttribute("placeholder", "email");
    email.setAttribute("id", "email");
    const password = document.createElement("input");
    password.setAttribute("placeholder", "password");
    password.setAttribute("id", "password");
    password.setAttribute("type", "password");
    const submit = document.createElement("input");
    submit.setAttribute("value", "submit");
    submit.setAttribute("type", "button");
    
    myForm.appendChild(email);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(password);
    myForm.appendChild(document.createElement("br"));
    myForm.appendChild(submit);

    submit.addEventListener("click", () =>{
      myUser = myStorage.getItem(email.value).split(", ");
      console.log(myUser);
      if(myUser.length>0){
        console.log("bigger then 0")
        if(myUser[myUser.length-1] == password.value){
          Dashboard();
        }
      }
    });
  }
  
  function removeAllElements(id){
    const Submits = document.getElementById(id);
    console.log(id)
    Submits.innerHTML = "";
    header.innerHTML = "";
  }

  function Dashboard(){
    removeAllElements("myForm");
    header.innerHTML = "to do list";
    createLogOut()
    const tdl = document.getElementsById("tdl");
    const addList = document.createElement("input");
    addList.setAttribute("value", "add to do list");
    addList.setAttribute("type", "button");
    tdl.appendChild(addList);

    addlist.addEventListener("click", () =>{
      removeAllElements("tdl");
      

    });
    


  }
  function createLogOut(){
    let createlogOut = getElementById("logOut");
    const logOut = document.createElement("input");
    logOut.setAttribute("value", "log out");
    logOut.setAttribute("type", "button");
    createlogOut.appendChild(logOut);
  }