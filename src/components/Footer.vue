<template>
    <div class="footer">
        <section class="container">
            <div class="nav_footer">
                <h1>НАВИГАЦИЯ</h1>
                <div class="menu">
                    <a href="#">Кухни</a>
                    <a href="#">Спальни</a>
                    <a href="#">Гостинные</a>

                    <a href="#">Прихожие</a>
                    <a href="#">Офисная мебель</a>
                    <a href="#">Детская</a>
                    
                    <a href="#">Шкафы</a>
                    <a href="#">Матрасы</a>
                    <a href="#">Мягкая мебель</a>
                </div>
                <div class="menu_under">
                    <a class="menu_under_item" href="#">Акции</a>
                    <a class="menu_under_item" href="#">Новинки</a>
                </div>
            </div>
            <div class="footer_logo">
                <svg width="56" height="30" viewBox="0 0 56 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.4541 24.4629H19.9844V30H0.255859V0.140625H7.4541V24.4629ZM32.4736 0.140625L39.1387 20.915L45.7832 0.140625H55.2578V30H48.0391V23.0273L48.7363 8.75391L41.5176 30H36.7598L29.5205 8.7334L30.2178 23.0273V30H23.0195V0.140625H32.4736Z" fill="black"/>
                </svg>
            </div>
            <div class="footer_addres">
                г. Анапа, Анапское шоссе,
                30 Ж/К Черное море
            </div>
            <div class="footer_contact">
                <div>
                    <svg class="phone_icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="black"/>
                    </svg>
                    <a tel:89648999119 class="phone">8 (964) 89 99 119</a>
                </div>
                
                <svg class="insta_icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 4.21429H13.3214M5.28571 1H11.7143C14.0812 1 16 2.91878 16 5.28571V11.7143C16 14.0812 14.0812 16 11.7143 16H5.28571C2.91878 16 1 14.0812 1 11.7143V5.28571C1 2.91878 2.91878 1 5.28571 1ZM8.5 11.7143C6.7248 11.7143 5.28571 10.2752 5.28571 8.5C5.28571 6.7248 6.7248 5.28571 8.5 5.28571C10.2752 5.28571 11.7143 6.7248 11.7143 8.5C11.7143 10.2752 10.2752 11.7143 8.5 11.7143Z" stroke="black"/>
                </svg>
                <div class="insta_contact">
                    ИНСТАГРАМ
                </div>

                <svg class="mail_icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5L9.16667 9.16667L17.3333 4.5M2.16667 1H16.1667C16.811 1 17.3333 1.52233 17.3333 2.16667V13.8333C17.3333 14.4777 16.811 15 16.1667 15H2.16667C1.52233 15 1 14.4777 1 13.8333V2.16667C1 1.52233 1.52233 1 2.16667 1Z" stroke="black"/>
                </svg>
                <div class="mail">mebel_loft_anapa@mail.ru</div>
            </div>
            <div class="clear"></div>
        </section>
    </div>
    
</template>

<script>

</script>

<style lang="scss" scoped>
.clear {
    height: 20px;
}
.footer {
    width: 100%;
    background: #FFF;
    box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.03);
}
.container {
    position: relative;
    width: 1140px;
    margin: 0 auto;
    margin-top: 15px;
}
.menu {
    width: 411px;
    height: 80px;
    display: flex;
    flex-flow: column wrap;
}
h1 {
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 20px;
}
a {
    color: var(--text-color, #414141);
    font-family: Roboto;
    margin-top: 7px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    &:hover {
        color: #D74444;
        transition: 0.5s;
    }
}
.nav_footer {
    padding-top: 54px;
    width: 50%;
}
.menu_under {
    margin-top: 35px;
}
.menu_under_item {
    margin-left: 30px;
}
.footer_logo {
    position: absolute;
    right: 0;
    top: 40px;
}
.footer_addres {
    position: absolute;
    color: var(--text-color, #414141);
    width: 171px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    text-align: right;
    right: 0;
    top: 100px;
}
.footer_contact {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    float: right;
    right: 0;
    bottom: 25px;
}
.mail {
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;   
}
.insta_contact {
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
}
.phone {
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 100%;
}
.phone_icon {
    margin-right: 10px;

}
.insta_icon {
    position: absolute;
    right: 310px;
}
.mail_icon {
    position: absolute;
    right: 175px;
}
</style>