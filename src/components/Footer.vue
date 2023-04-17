<template>
    <div class="footer">
        <div class="container">
           <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">Gift Card</a></li>
                        <li><a href="#">TROVA UN NEGOZIO</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">INVIA FEEDBACK</a></li>
                        <li><a href="#">Our Services</a></li>
                        
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Find help</h4>
                    <ul>  
                        <li><a href="#">HAI BISOGNO DI AIUTO?</a></li>
                        <li><a href="#">CHI SIAMO ?</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Follow us</h4>
                    <div class="social-link">
                        <a href="#"><v-icon class="icon-link" name="md-facebook" fill="black"/></a>
                        <a href="#"><v-icon class="icon-link" name="fa-instagram" fill="black"/></a>
                        <a href="#"><v-icon class="icon-link" name="fa-youtube" fill="black"/></a>
                        <a href="#"><v-icon class="icon-link" name="fa-twitter" fill="black"/></a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
body{
    font-family: sans-serif,"poppins";
    text-transform: capitalize;
}
.container{
    max-width: 1200px;
    margin: auto;
}
.footer{
    background-image: url(catalogo.jpg);
    padding: 80px 0;
    background-size: cover;
    height: 100vh;
    
}
.row{
    display: flex;
    flex-wrap: wrap;
    
}
.footer-col{
    width: 25%;
    padding: 0 15px;
}
.footer-col h4{
    font-size: 25px;
    color: #ffffff;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
   font-family: sans-serif;

    
}
.footer-col h4::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: rgb(255, 255, 255);
    height: 1px;
    box-sizing: border-box;
    width: 130px;
}

.footer-col ul{
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
.footer-col ul li a{
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
    display: block;
    transition: all .3s ease;
    font-size: small;
    letter-spacing: 0.5px;
    
}
.footer-col ul li a:hover{
    color: #5f5565;
    padding-left: 16px;
}
.footer-col .social-link a{
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgb(255, 255, 255);
    margin: 0 10px 10 0px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: white;
    margin: bottom 10px; ;
    transition: all .5s ease;
}
.footer-col .social-link a:hover{
   
    background: #36243a;
    color: #ffffff; 
}
.social-link{
    display: flex;
    gap: 0.8rem;
}
.footer-col .social-link a .icon-link:hover{
    fill: #ffffff;
}
@media (max-width:567px) {
    .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
}

@media (max-width:567px) {
    .footer-col{
        width: 100%;
        margin-bottom: 30px;
    }
}
</style>