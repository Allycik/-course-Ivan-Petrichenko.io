let age = document.getElementById("age");

function showUser (name,sername) {
    alert ("Пользователь " + name + "" + sername + " его возраст " + this.value);
}
 showUser.apply(age,["Толик "," Михайлов"]);

 