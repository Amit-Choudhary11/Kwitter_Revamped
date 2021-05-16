var firebaseConfig = {
      apiKey: "AIzaSyA5Y0DV2dA3ksHgYkthvHz73AdQbpLd47M",
      authDomain: "newyorkcity-cluw.firebaseapp.com",
      projectId: "newyorkcity-cluw",
      storageBucket: "newyorkcity-cluw.appspot.com",
      messagingSenderId: "578021234940",
      appId: "1:578021234940:web:56359e4933dcb99a425f79"
    };

function getName(){
      person = localStorage.getItem("username");
      document.getElementById("person").innerHTML=person;
}

