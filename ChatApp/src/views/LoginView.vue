<template>
    <div>
    <h1>Login</h1>
    <form>
        <label for="email"> Email</label>
        <input type="email" name="email" id="email">
        <br>
        <label for="password"> Password </label>&nbsp
        <input type="password" name="password" id="password">
        <br>
        <button type="submit">Login</button>
    </form>
</div>
</template>

<style scope>
div
{
    background: #474bff;
    background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    -webkit-box-shadow: -1px -6px 12px 0.6px gray;
     -moz-box-shadow: -1px -6px 12px -0.5px #dddddd;
    box-shadow: -1px -6px 12px -0.5px white;
    

}
form {
    
    background: rgba(255,255,255,0.35);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.175);

}


</style>