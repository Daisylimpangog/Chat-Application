<template>
    <div class="container">
        <div class="header">
            <div class="logo1">
                <img src="../assets/litchat.ico" alt="logo">
            </div>
            <div class="header-profile">
                <span>Welcome Mr.asdasd</span>
                <img src="../assets/profile.png" alt="">
            </div>
        </div>
        <div class="content-wrapper">
            <div class="message-box">
               <div class="chat-container">
                    <div class="chats">
                        <div class="chat-wrapper">
                            <h1>CHATS</h1>
                            <input id="search" type="text" placeholder="Search">
                            <div class="recent-chat">
                                <div class="profile-1">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-1">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-1">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-1">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                            </div>
                            <h2>Friend Suggestion</h2>
                            <div class="friend-suggestion">
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                                <div class="profile-2">
                                    <img src="../assets/profile.png" alt="">
                                    <span>Manilyn</span>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div class="chat-box">
                        <div class="box-wrapper">
                            <div class="chat-profile">
                                <img src="../assets/profile.png" alt="" srcset="">
                                <span>Jeanee</span>
                            </div>
                            <div class="option">
                                !
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div class="profile-overview">

            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
/* .container{
    
} */

.header{
    display: flex;
    justify-content: space-between;

    border: 2px solid white;
}
.logo1 img{
    width: 130px;
}
.header-profile{
    display: flex;
    align-items: center;
}
.header-profile span{
    color: white;
    font-size: larger;
}
.header-profile img{
    width: 50px;
}
.content-wrapper{
    width: 100%;
    border: 2px solid white;
    display: flex;
    color: white;
}
.message-box{
    width: 70%;
    border: 2px solid white;

}
.profile-overview{
    width: 30%;
    border: 2px solid white;
 
}
.chat-container{
    display: flex;
    border: 2px solid white;
    margin: 10px;
}
.chats{
    width: 30%;
    border: 2px solid white;
    margin-right: 20px;
}
.chat-box{
    width: 70%;
    border: 2px solid white;
}
.chat-wrapper{
    width: auto;
    display: flex;
    flex-direction: column;

}
.chat-wrapper input{
    width: 100%;

}
#search{
    width: auto;
    margin: 10px;
}
.recent-chat{
    justify-content: center;
}
.recent-chat,.friend-suggestion{
    display: grid;
    grid-template-columns: auto;
    height: 20vh;
    overflow-y: auto;

}
.friend-suggestion{
    grid-template-columns: auto auto;
    margin: 0 10px;
}
.profile-1{
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
}
.profile-1 img,.profile-2 img,.chat-profile img{
    width: 50px;
    height: 50px;
   
}
.profile-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
}
.box-wrapper{
    margin: 10px;
    border: 2px solid white;
    display: flex;
    justify-content: space-between;
    
    padding: 5px;
}
.chat-profile,.option{
    display: flex;
    align-items: center;
}
.option{
    border: 2px solid white;
    padding: 15px;
    font-size: 30px;
	border-radius: 9999px;
}
</style>