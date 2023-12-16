<template>
  <div class="form">
    <h1>Register Here!!</h1>
    <form name="registration" action="" method="post">
      <input type="text" name="Fullname" placeholder="Fullname" required />
      <input type="text" name="username" placeholder="username" required />
      <input type="Email" name="Email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />

      <div class="birthday-input">
        <label for="birthday">Birthday:</label>
        <input type="date" name="birthday" id="birthday" required />
      </div>
      <br />
      <div class="genderlabel">
        <label for="gender">Gender:</label>
        <input type="radio" name="gender" value="male" id="male" required />
        <label for="male">Male</label>
        <input type="radio" name="gender" value="female" id="female" required />
        <label for="female">Female</label>
      </div>
      <br>
      <button><a href="/step1">Register</a></button>
    </form>
  </div>
</template>

<style scope>
.birthday-input {
  position: relative;
  color: black;
  font-size: 20px;
}

.genderlabel {
  color: black;
  font-size: 20px;
}
.form {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(115, 23, 172, 0.7091211484593838) 36%,
    rgba(0, 212, 255, 1) 100%
  );
  color: gray;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 440px;
  box-shadow: 4px 3px 3px 3px;
}

.form h1 {
  font-size: 35px;
  margin: 0 0 20px;
  color: white;
}

/* Style form inputs */
.form input[type="text"],
.form input[type="email"],
.form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
}

/* Style radio button container */
.form div {
  text-align: left;
}

/* Style radio buttons and labels */
.form input[type="radio"] {
  margin-right: 5px;
}

/* Style labels associated with radio buttons */
.form label[for="male"],
.form label[for="female"] {
  font-weight: normal;
}

.form label[for="male"]::before,
.form label[for="female"]::before {
  content: "\00a0\00a0\00a0";
  color: black;
}

/* Style the submit button */
button {
  margin-top: 5px;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button a{
  text-decoration: none;
  color: white;
}
button:hover{
  background-color: blue;

}
</style>
