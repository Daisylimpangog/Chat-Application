<template>
  <form>
    <div class="container">
      <h1>LOG IN!</h1>
      <p>Fill the form below to <strong>Log In</strong></p>
      <hr style="border: 1px solid #999" />

      <div class="form-group">
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email *"
          autocomplete="off"
          spellcheck="false"
          required
        />
        <label for="email">Email Address</label>
      </div>

      <div class="form-group">
        <input
          class="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password *"
          autocomplete="off"
          spellcheck="false"
          required
        />
        <label for="password">Password</label>
      </div>

      <hr style="border: 1px solid #999; margin-top: 0.8rem" />
      <input class="btn" type="submit" name="submit" value="LOG IN" />
    </div>
  </form>
</template>

<style scope>
body {
  background: #9b9ce0;
  background: -webkit-radial-gradient(circle, #9b9ce0 0%, #8c2cc4 100%);
  background: radial-gradient(circle, #9b9ce0 0%, #8c2cc4 100%);
}
/* Apply a reset to remove default browser styles */
body,
h1,
p,
form,
input,
hr {
  margin: 0;
  padding: 0;
}

/* Apply styles to the container */
.container {
  max-width: 460px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.275);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Style the header */
h1 {
  font-size: 24px;
  margin-bottom: 10px;
  padding: 1px;
  border: 1px;
}

/* Style the paragraph */
p {
  font-size: 14px;
  margin-bottom: 20px;
}

/* Style the form-group */
.form-group {
  margin-bottom: 20px;
  width: 90%;
}

/* Style the input fields */
.form-control {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

/* Style the labels */
label {
  display: block;
  font-weight: bold;
}

/* Style the horizontal rule */
hr {
  border: 1px solid #999;
  margin-top: 0.8rem;
  margin-bottom: 20px;
}

/* Style the submit button */
.btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

/* Apply styles to form elements on focus */
.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
