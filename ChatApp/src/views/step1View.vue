<template>
    <div class="container">
      <div class="header">
        <div class="image-container">
        <img src="../assets/profile.png" alt="" /><br>
    </div>
        <div class="header-profile">
          <span>Hey! <strong>Mr.Programmer</strong></span><br>
          <div class="avatar">
            <br>
            <h1>
                 Please Select Your Avatar
            </h1>
        </div>
        <div class="Avatar-box">
            <img class="boxed-image" src="../assets/profile.png" alt="" />
            <img class="boxed-image" src="../assets/profile.png" alt="" />
            <img class="boxed-image" src="../assets/profile.png" alt="" />
        </div>
        <div class="Avatar-box1">
            <img class="boxed-image" src="../assets/profile.png" alt="" />
            <img class="boxed-image" src="../assets/profile.png" alt="" />
            <img class="boxed-image" src="../assets/profile.png" alt="" />
        </div>
        <br>
        <div>
            <button class="btn1"><a href="/login">Cancel</a></button>
            <button class="btn2"><a href="/">Proceed</a></button>
        </div>
        </div>
        
      </div>
      
    </div>
    
  </template>
  
  <script setup></script>
  
  <style scope>
  .container {
    background: #9452ff;
    padding: 20px;
    border-radius: 20px;
    height: 44.5rem ;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-right: 10rem;

  }
  
  .header-profile span {
    color: white;
    font-size:30px ;
    font-weight: bold;
    text-shadow: 1px 1px black;
   
  }
  .header-profile img {
    width: 150px;
    margin-left: 2rem;

  }
  .image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Optional: Add additional styles for the container */
  height: 70vh; /* Set a height for vertical centering */
}

.image-container img {
  /* Optional: Add additional styles for the image */
  display: block;
  /* If you want to center vertically within the container, you can use margin-top: auto; and margin-bottom: auto; */
}


  .avatar{
    font-size: 10px;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px black;
    text-align: center;
    margin-top: 40px;
  }
  strong
  {
    color: white;
    font-size:30px ;
    font-weight: bold;
    text-shadow: 1px 1px black;
  }
  strong:hover{
    color: lightcoral;
  }
  .boxed-image {
    background-color: lightcoral;
      border: 2px solid #000; /* Set the border width and color */
      padding: 10px; /* Optional: Add padding for some space around the image */
      display: inline-block; /* Make sure the box doesn't take the full width */
      height: 110px;
      width: 70px;
    }

    /* Optional: You can style the image itself within the box */
    .boxed-image img {
      width: 100%; /* Make the image fill the box */
      height: auto; /* Maintain the aspect ratio */
      display: block; /* Remove extra space below the image */
    }
    
   .btn1{
    margin-left: 26.8rem;
    margin-right: 1rem;
    background-color: gray;
    color: #fff;
    padding: 10px 20px ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
   }
   .btn2{
    background-color: #ff6f61;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
   }
  </style>
  