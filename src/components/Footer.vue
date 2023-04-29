<template>
    <div class="footer glassmorphism">
        <div class="container">
            <div class="row">

                <div class="footer-col flex flex-col" v-for="footerCol in footerLinks">
                    <h4>{{ footerCol.title }}</h4>
                    <ul class="flex flex-col gap-5">
                        <li v-for="footerLink in footerCol.links">
                            <a :href="footerLink.link">{{ footerLink.text }}</a>
                        </li>
                    </ul>
                </div>

                <div class="footer-col flex flex-col">
                    <h4>follow us</h4>
                    <div class="social-link">
                        <a href="#"><v-icon class="icon-link" name="md-facebook" fill="var(--secondary-color)" /></a>
                        <a href="#"><v-icon class="icon-link" name="fa-instagram" fill="var(--secondary-color)" /></a>
                        <a href="#"><v-icon class="icon-link" name="fa-youtube" fill="var(--secondary-color)" /></a>
                        <a href="#"><v-icon class="icon-link" name="fa-twitter" fill="var(--secondary-color)" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const footerLinks = [
    {
        title: "company",
        links: [
            {
                text: "gift card",
                link: "#"
            },
            {
                text: "trova un negozio",
                link: "#"
            },
        ]

    },
    {
        title: "services",
        links: [
            {
                text: "invia feedback",
                link: "#"
            },
            {
                text: "our services",
                link: "#"
            },
        ]

    },
    {
        title: "find help",
        links: [
            {
                text: "hai bisogno di aiuto?",
                link: "#"
            },
            {
                text: "chi siamo?",
                link: "#"
            },
            {
                text: "payment options",
                link: "#"
            },
        ]

    },

]

</script>

<style scoped>
body {
    font-family: sans-serif, "poppins";
    text-transform: capitalize;
}

.container {
    max-width: 90%;
    margin: auto;
}

.footer {
    padding: 4rem 0;
    border-top: 1px solid var(--accent-color);
}

.row {
    display: flex;
    justify-content: space-around;
}

.footer-col h4 {
    font-size: 25px;
    color: var(--primary-color);
    font-weight: 500;
    text-transform: capitalize;
    font-family: sans-serif;
    border-bottom: 1px solid var(--accent-color);
    width: 8rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li a {
    font-size: 16px;
    text-decoration: none;
    color: var(--accent-color);
    display: block;
    transition: all .3s ease;
    font-size: small;
    letter-spacing: 0.5px;
    text-transform: capitalize;
}

.footer-col ul li a:hover {
    color: var(--primary-color);
    transform: translate(1rem);
}

.footer-col .social-link a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: var(--secondary-color);
    margin: 0 10px 10 0px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: var(--secondary-color);
    margin: bottom 10px;
    transition: all .5s ease;
}

.footer-col .social-link a:hover {
    background: var(--tertiary-color);
}

.social-link {
    display: flex;
    gap: 0.8rem;
}

.icon-link {
    fill: var(--primary-color);
}

.footer-col .social-link a:hover .icon-link {
    fill: var(--secondary-color);
}

@media (max-width:800px) {

    .row {
        flex-direction: column;
        align-items: center;
    }

    .footer-col {
        margin-bottom: 2rem;
        align-items: center;
    }

    .footer-col ul {
        align-items: center;
    }
}
</style>