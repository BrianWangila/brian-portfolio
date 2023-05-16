<script>

    export default {
        name: "SideNav",
    }


</script>



<template>
    <header id="header">
        <div class="d-flex flex-column">

            <div class="profile">
                <img src="../assets/img/brian-image.jpg" alt="" class="img-fluid rounded-circle">
                <h1 class="text-light"><a href="index.html">Brian Wangila</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>

            <nav id="navbar" class="nav-menu navbar">
                <!-- <ul>
                    <li><a href="#" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i><span>About</span></a></li>
                    <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul> -->

                <ul>
                    <li><router-link to="/" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
                    <li><router-link to="/about" class="nav-link scrollto"><i class="bx bx-user"></i><span>About</span></router-link></li>
                    <li><router-link to="/resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></router-link></li>
                    <li><router-link to="/portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></router-link></li>
                    <li><router-link to="/services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></router-link></li>
                    <li><router-link to="/contacts" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></router-link></li>
                </ul>
            </nav>
        </div>
    </header>

    
</template>




<style scope>
    .profile img {
        height: 130px;
    }


</style>