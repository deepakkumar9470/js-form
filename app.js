
const myBtn = document.getElementById("myBtn")
const myform = document.getElementById("myForm")
const myerror = document.getElementById("error")

myBtn.addEventListener('submit',validate)


function validate() {


    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const age = document.getElementById("age").value;

   
      document.write("My name is :" + name) 
      document.write(" age is :" + age)
      document.write(" and i live at :" + address)

  }