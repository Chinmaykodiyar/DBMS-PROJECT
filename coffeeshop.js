<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="coffeshop.css">
</head>
<body>
    <header class="header">
        <nav>
            <div class="nav_bar">
                <div class="logo">
                    <a href="#"><img src="" alt="logo"></a>
                </div>
                <div class="nav_menu_btn" id="menu-btn">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
            <ul class="nav_links" id="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#explore">Explore</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="btn nav_btn">Book Now</button>
        </nav>
        <div class="section_container header_container" id="home">
            <p>Simple-Unique-Friendly</p>
            <h1>Make Yourself At Home <br/>In Our<span>Hotel</span>.</h1>
        </div>
    </header>
        <section class="section_container booking_container">
            <form action="/" class="booking_form">
                <div class="input_group">
                    <span><i class="ri-calender-2-fill"></i></span>
                    <div>
                        <label for="check-in">CHECK-IN</label>
                        <input type="text" placeholder="CHECK-IN"/>
                    </div>
                </div>
                <div class="input_group">
                    <span><i class="ri-calender-2-fill"></i></span>
                    <div>
                        <label for="check-out">CHECK-OUT</label>
                        <input type="text" placeholder="CHECK-OUT"/>
                    </div>
                </div>
                <div class="input_group">
                    <span><i class="ri-user-fill"></i></span>
                    <div>
                        <label for="guest">GUEST</label>
                        <input type="text" placeholder="GUEST"/>
                    </div>
                </div>
                <div class="input_group input_btn">
                    <button class="btn">CHECK OUT</button>
                </div>
            </form>
        </section>

    <section class="section_container about_container" id="about">
        <div> class="about_image">
            <img src="" alt="about"/>
        </div>
        <div class="about_content">
            <p> class="section_subheader">ABOUT US</p>
            <h2 class="section_header">The best holidays starts here!</h2>
            <p class="section_description">
                with a focus on quality accomodation, personalized experiences, and
                 seamless booking, our platform is dedicated to ensuring that every 
                 traveler embarks on their dream holiday with confidence and excitement.
            </p>
            <div class="about_btn">
                <button class="btn">Read More</button>
            </div>

        </div>
    </section>
     
    <section class="section_container room_container">
        <p class="section_subheader">OUR LIVING ROOM</p>
        <h2 class="section_header">The Most Memorable Rest Time Starts Here</h2>
        <div class="room_grid">
            <div class="room_card">
                <div class="room_card_image">
                    <img src="" alt="room"/>
                    <div class="room_card_icons">
                        <span><i class="ri-heart-fill"></i></span>
                        <span><i class="ri-paint-fill"></i></span>
                        <span><i class="ri-shield-star-line"></i></span>
                    </div>
                </div>
                <div class="room_card_details">
                    <h4>Deluxe Ocean View</h4>
                    <p>
                        bask in the luxury wiht breathing taking views
                    </p>
                    <h5>Starting from<span>$299/night</span></h5>
                    <button class="btn">Book Now</button>
                </div>
            </div>
            <div class="room_card">
                <div class="room_card_image">
                    <img src="" alt="room"/>
                    <div class="room_card_icons">
                        <span><i class="ri-heart-fill"></i></span>
                        <span><i class="ri-paint-fill"></i></span>
                        <span><i class="ri-shield-star-line"></i></span>
                    </div>
                </div>
                <div class="room_card_details">
                    <h4>Executive Cityscape Room</h4>
                    <p>
                        Experince Urban elegeance and modern comfort in the heart of the city.
                    </p>
                    <h5>Starting from<span>$199/night</span></h5>
                    <button class="btn">Book Now</button>
                </div>
            </div>
            <div class="room_card">
                <div class="room_card_image">
                    <img src="" alt="room"/>
                    <div class="room_card_icons">
                        <span><i class="ri-heart-fill"></i></span>
                        <span><i class="ri-paint-fill"></i></span>
                        <span><i class="ri-shield-star-line"></i></span>
                    </div>
                </div>
                <div class="room_card_details">
                    <h4>Family Garden Retreat</h4>
                    <p>
                        Spacious and inviting, perfect for creating cherished memories with loved ones.
                    </p>
                    <h5>Starting from<span>$249/night</span></h5>
                    <button class="btn">Book Now</button>
                </div>
            </div>

            </div>
        </div>
    </section>

    <section class="Service" id="Service">
        <div class="section_container Service_container">
            <div class="service_content">
                <p class="service_subheader">SERVICES</p>
            <h2 class="section_header">Strives Only For The Best.</h2>
            <ul class="service_list">
                <li>
                    <span><i class="ri-shield-star-line"></i></span>
                    high class security
                </li>
                <li>
                    <span><i class="ri-24-hour-line"></i></span>
                    24 Hours Room Service
                </li>
                <li>
                    <span><i class="ri-headphone-line"></i></span>
                    Conference Room
                </li>
            </ul>
        </div>
        </div>
    </section>

    <section class="section_container booking_container">
        <div class="banner_content">
            <div class="banner_card">
                <h4>50+</h4>
                <p>Properties Available</p>
            </div>
            <div class="banner_card">
                <h4>650+</h4>
                <p>Bookings Completed</p>
            </div>
            <div class="banner_card">
                <h4>1000+</h4>
                <p>Happy Customers</p>
            </div>
        </div>
    </section>
<section class="explore" id="explore">
    <p class="section_subheader">EXPLORE</p>
    <h2 class="section_header">Whats New Today.</h2>
    <div class="explore_bg">
        <div class="explore_content">
            <p class="section_description">5<sup>th</sup> june 2024</p>
            <h4>A New Menu Is Availiable In Our Hotel.</h4>
            <button class="btn">Continue</button>
        </div>
    </div>
</section>
<footer class="footer" id="contact">
    <div class="section_container footer_container">
        <div class="footer_col">
            <div class="logo">
                <a href="#home"><img src="" alt="logo"></a>
            </div>
            <p class="section_description">
                Discover a world of comfort,luxury and adventure as you explore
                our curated selection of hotels.
            </p>
            <button class="btn">Book Now</button>
        </div>
        <div class="footer_col"></div>
        <h4>QUICK LINK</h4>
        <ul class="footer_links">
            <li><a href="#">Browse destinations</a></li>
            <li><a href="#">Special Offers </a></li>
            <li><a href="#">Room Types and Amenities</a></li>
            <li><a href="#">Customer Reviews</a></li>
            <li><a href="#">Travel Tips and Guides</a></li>
        </ul>
    </div>
    <div class="footer_bar">
        copyrights@ 2024 by <span>CSK Designs</span>. All rights reserved.
    </div>
</footer>
<script src="https://unpkg.com/scrollreveal"></script>
<script src="coffeeshop.js"></script>

       
</body>
</html>