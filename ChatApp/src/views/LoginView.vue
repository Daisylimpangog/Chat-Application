<template>
  <div class="form">
    <h1 style="text-align: center">Log In</h1>
    <form action="" method="post" name="login">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
      /><br />
      <input type="password" name="password" placeholder="Password" required />
      <br />
      <input name="submit" type="submit" value="Login" />
    </form>
    <p>Not registered yet? <a href="/register">Register Here</a></p>
  </div>
</template>

<style scope>
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(115, 23, 172, 0.7091211484593838) 36%,
    rgba(0, 212, 255, 1) 100%
  );
}
.logo {
  max-width: 100px; /* Set the maximum width for the logo */
  margin: 0 auto; /* Center the logo horizontally */
  display: block; /* Ensure it's a block element for proper alignment */
}

.login {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: floralwhite;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

textarea:hover {
  background-color: transparent;
  border: transparent;
  text-decoration: none;
}

a {
  color: solid blue;
  text-decoration: underline;
}
p {
  font-size: 20px;
  color: white;
  padding: 45px;
  text-align: center;
}

.form {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(134, 5, 116, 0.7091211484593838) 46%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 10px;
  width: 450px;
  height: 380px;
  margin: 280px auto;
  border: 1px solid gray;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 4px 3px 3px 3px;
}
input[type="email"],
input[type="password"],
input[type="text"] {
  height: 30px;
  width: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
  font-size: 14px;
  margin-top: 10px;
  align-items: center;
  box-shadow: 3px 5px;
}

input[type="submit"] {
  padding: 10px 25px 8px;
  color: #fff;

  background-color: #aa980e;

  text-shadow: rgba(231, 208, 58, 0.24) 0 1px 0;
  font-size: 16px;
  box-shadow: rgba(231, 208, 58, 0.24) 0 2px 0 0 inset, #fff 0 1px 0 0;
  border: 1px solid #e7d03a;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  height: 50px;
  width: 100px;
}
input[type="submit"]:hover {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(134, 5, 116, 0.7091211484593838) 46%,
    rgba(0, 212, 255, 1) 100%
  );
}

button[type="submit"] {
  padding: 10px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}

button[type="submit"]:hover {
  color: blue;
}

.ul {
  list-style-type: none;
  padding: 0;
}
.profile-overview
{
  max-height: 550px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
}
#message-input
{
  max-width: 480px;
  
}
.chat-profile span
{
   position: absolute;
   align-items: center;
   justify-content: center;
   margin-top: 15px;
   margin-left: 10px;
}
</style>
