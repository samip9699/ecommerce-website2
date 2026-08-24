import "../Home.css";

import food_img1 from "../assets/food_img1.jpg";
import burger_img from "../assets/burger_img.jpg";
import pizza_img from "../assets/pizza_img.jpg";
import sandwich_img from "../assets/sandwich_img.jpg";
import coffee_img from "../assets/coffee_img.jpg";
import streetfood_img from "../assets/streetfood_img.jpg";
import pasta_img from "../assets/pasta_img.jpg";
import leaf_img from "../assets/leaf_img.png"
import medal_img from "../assets/medal_img.png"
import delivery_img from "../assets/delivery_img.png"
import resturant_img from "../assets/resturant_img.jpg"
import dersert_img from "../assets/dersert_img.jpg"
import wrap_img from "../assets/wrap_img.jpg"
import chiken_img from "../assets/chiken_img.jpg"
import alldish from "../assets/alldish.jpg"
import fastfood_img1 from "../assets/fastfood_img1.jpg"
import fastfood_img2 from "../assets/fastfood_img2.jpg"
import fastfood_img3 from "../assets/fastfood_img3.jpg"
import fastfood_img4 from "../assets/fastfood_img4.jpg"
import fastfood_img5 from "../assets/fastfood_img5.jpg"
import fastfood_img6 from "../assets/fastfood_img6.jpg"
import chef1 from "../assets/chef1.jpg"
import chef2 from "../assets/chef2.jpg"
import chef3 from "../assets/chef3.jpg"
import chef4 from "../assets/chef4.jpg"
import reating from "../assets/reating.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
function Home() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-7">

            <h1 className="fw-bold">
              Delicious Fast Food <br />
              for every moment.
            </h1>

            <p>
              Experience bold flavors crafted from premium ingredients.
              From crispy burgers to gourmet pizzas -
              every bite is an adventure worth savoring.
            </p>

            <div className="buttons">
              <button>Explore Menu</button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-5 food-image-box">
            <img
              src={food_img1}
              className="food-img"
              alt="Delicious food"
            />
          </div>

        </div>
      </div>
      <div className="container">
        <h2 className="text-center"> What We Offer</h2>
        <h1 className="text-center"> Browse by Category</h1>
        <p className=" text-center">From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
        <div className="container">
          <div className="row1">
            <div className="col-md-2">
              <div className="burger">
                <img src={burger_img} className="" alt="" />
                <p className=""> burger </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="burger">
                <img src={sandwich_img} className="" alt="" />
                <p className=""> sandwich </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="burger">
                <img src={coffee_img} className="" alt="" />
                <p className=""> coffee </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="burger">
                <img src={pizza_img} className="" alt="" />
                <p className=""> pizza </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="burger">
                <img src={pasta_img} className="" alt="" />
                <p className=""> pasta </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="burger">
                <img src={streetfood_img} className="" alt="" />
                <p className=""> street food </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row2 d-flex">
          <div className="col-md-5 ">
            <img src={resturant_img} className=" " alt="" />
          </div>

          <div className="col-md-7">
            <h3 className="text-center m-5"> Our Story</h3>
            <h1 className="text-center"> We Invite You to Visit
              Our Food Restaurant
            </h1>
            <p className=""> Founded in 2012,
              Sd wegon began as a small corner joint with a big dream - to serve food that brings people together.
              Today we're proud to serve thousands of happy customers every week with the same passion that started it all.</p>
            <div className="details">
              <img src={leaf_img} className="" alt="" />
              <div className="">
                <h2 className=""> 100% Fresh Ingredients</h2>
                <p className=""> We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness</p>
              </div>
            </div>
            <div className="details">
              <img src={medal_img} className="" alt="" />
              <div className="">
                <h2 className=""> Award-Winning Recipes</h2>
                <p className=""> Our signature recipes have won national culinary awards 5 years in a row</p>
              </div>
            </div>
            <div className="details">
              <img src={delivery_img} className="" alt="" />
              <div className="">
                <h2 className=""> Lightning-Fast Delivery</h2>
                <p className=""> Order online and get hot, fresh food at your door in under 25 minutes, guaranteed</p>
              </div>
            </div>
            <button className="view-menu-btn"> view full menu</button>
          </div>
        </div>
      </div>

      <div className=" food menu">
        <h2> What's Cooking</h2>
        <h1> Our Delicious Menu</h1>
        <div className="container">
          <div className="row3">
            <div className="col-md-4">
              <div className="classic burger">
                <img src={burger_img} className="" alt="" />
                <h4 className=""> Burger</h4>
                <h1 className=""> classic smash burger</h1>
                <p className="text-muted"> Double smashed patty, cheddar cheese, caramelized onions,
                  house pickles and our legendary special sauce.
                  Made fresh to order on a toasted brioche bun.</p>
                <h2> $14.99</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classic burger">
                <img src={pizza_img} className="" alt="" />
                <h4 className=""> pizza</h4>
                <h1 className=""> Margherita Royale</h1>
                <p className="text-muted"> San Marzano tomatoes, fresh buffalo mozzarella,
                  fragrant basil leaves,
                  drizzled with Italian truffle oil on a hand-stretched sourdough base.</p>
                <h2> $20.99</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classic burger">
                <img src={chiken_img} className="" alt="" />
                <h4 className="">chicken </h4>
                <h1 className=""> Nashville Hot Chicken</h1>
                <p className="text-muted"> Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend,
                  served with honey drizzle and house pickles on a toasted brioche bun.</p>
                <h2> $13.99</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row3">
            <div className="col-md-4">
              <div className="classic burger">
                <img src={wrap_img} className="" alt="" />
                <h4 className=""> warp</h4>
                <h1 className=""> Loaded Fajita Wrap</h1>
                <p className="text-muted"> Grilled chicken strips,
                  saut�ed bell peppers and onions, sour cream,
                  fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.</p>
                <h2> $14.99</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classic burger">
                <img src={dersert_img} className="" alt="" />
                <h4 className=""> deserts</h4>
                <h1 className="">dabu cake </h1>
                <p className="text-muted"> Warm molten chocolate cake with a gooey Nutella center,
                  served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries.</p>
                <h2> $20.99</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classic burger">
                <img src={pasta_img} className="" alt="" />
                <h4 className="">pasta</h4>
                <h1 className=""> Truffle Mushroom Pasta</h1>
                <p className="text-muted"> Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend,
                  served with honey drizzle and house pickles on a toasted brioche bun.</p>
                <h2> $13.99</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="view-menu-btn"> view full name </button>
      </div>
     <div className="container">
  <div className="row4">
    
    {/* Left Side */}
    <div className="col-md-6 offer-content">
      <h2 className="fw-bold fst-italic">
        Get 30% Off <br />
        Our Signature <br />
        Burger Meal
      </h2>

      <p className="text-center text-muted">
        Don't miss our weekend special - grab our award-winning
        signature burger combo with loaded fries,
         and a premium shake
        at an unbeatable price.
      </p>

      <button className="subscribe-btn">
        Grab the Deal
      </button>
    </div>

    {/* Right Side */}
    <div className="col-md-6">
      <img src={alldish} className="offer-img" alt="Burger Meal" />
    </div>

  </div>
</div>
      
      <h2 className="text-center fw-bold fst-italic">Food Showcase </h2>
      <h1 className=" text-center"> Let's See Our Fast Food</h1>

      <div className="container">
        <div className="row5">
          <div className="col-md-4">
            <img src={fastfood_img1} className=" " alt="" />
            <img src={fastfood_img2} className=" " alt="" />
            <img src={fastfood_img3} className=" " alt="" />
          </div>
          <div className="col-md-4">
            <img src={fastfood_img4} className=" " alt="" />
            <img src={fastfood_img5} className=" " alt="" />
            <img src={fastfood_img6} className=" " alt="" />
          </div>
        </div>
      </div>
      <h3 className=" text-center fst-italic fw-bold">The Culinary Team</h3>
      <h1 className="text-center">Meet Our Expert Chefs</h1>
      <div className="container">
        <div className="row6">
          <div className="col-md-3">
            <img src={chef1} className="" alt="" />
            <h2> Alice Mortal</h2>
            <h2>head chef </h2>
            <p className="text-muted"> 15 yrears of Experience</p>
          </div>
          <div className="col-md-3">
            <img src={chef2} className="" alt="" />
            <h2> Alice Mortal</h2>
            <h2>head chef </h2>
            <p className="text-muted"> 15 yrears of Experience</p>
          </div>
          <div className="col-md-3">
            <img src={chef3} className="" alt="" />
            <h2> Alice Mortal</h2>
            <h2>head chef </h2>
            <p className="text-muted"> 15 yrears of Experience</p>
          </div>
          <div className="col-md-3">
            <img src={chef4} className="" alt="" />
            <h2> Alice Mortal</h2>
            <h2>head chef </h2>
            <p className="text-muted"> 15 yrears of Experience</p>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-4">Opening Hours</h3>
      <h1 className="text-center">We're Open For You</h1>
      <div className="container">
        <div className="row7">
          <div className="col-md-7">
            <div className="sedule">
              <div className="hours">
                <div className="day">
                  <span className="calender"> 📅</span>
                  Monday--Tuesday
                </div>
                <div className="closed">
                  <span className="dot"></span>
                  closed
                </div>
              </div>
              <div className="hours">
                <div className="day">
                  <span className="calender"> 📅</span>
                  Wednesday -- Thursday
                </div>
                <div className="closed">
                  <span className="dot"></span>
                  09:00 AM -- 10:00 PM
                </div>
              </div>
              <div className="hours">
                <div className="day">
                  <span className="calender"> 📅</span>
                  Friday
                </div>
                <div className="closed">
                  <span className="dot"></span>
                  09:00 AM -- 11:00 PM
                </div>
              </div>
              <div className="hours">
                <div className="day">
                  <span className="calender"> 📅</span>
                  Saturday- sunday
                </div>
                <div className="closed">
                  <span className="dot"></span>
                  09:00 AM -- 11:00 PM
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="contect-info">
              <div className="contect">
                <span className="contect-icon">📍</span>
                <span>address</span>
              </div>
              <div className="contact-value">
                42 Flavor Street, NY
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-title">
                <span className="contact-icon">📞</span>
                <span>Phone</span>
              </div>

              <div className="contact-value">
                +1 (800) 123-4567
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-title">
                <span className="contact-icon">✉</span>
                <span>Email</span>
              </div>

              <div className="contact-value">
                hello@sdwegon.com
              </div>
            </div>

          </div>
        </div>
      </div>
      <h3 className="text-center mt-4 ">What People Say</h3>
      <h1 className="text-center mb-4"> Our Customers Feedback</h1>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4 ">
            <div className="review mb-4">
              <img src={reating} className="" alt="" />
              <p>the tuffle passta blew my mind . i did't expect that the qulaity of the fast food place, great embious,good food qulaity,
                super service and staff. overall it's great exprience .. </p>
              <h3> david park. </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review">
              <img src={reating} className="" alt="" />
              <p>the tuffle passta blew my mind . i did't expect that the qulaity of the fast food place, great embious,good food qulaity,
                super service and staff. overall it's great exprience .. </p>
              <h3> david park. </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review">
              <img src={reating} className="" alt="" />
              <p>the tuffle passta blew my mind . i did't expect that the qulaity of the fast food place, great embious,good food qulaity,
                super service and staff. overall it's great exprience .. </p>
              <h3> david park. </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation-section">

        <h3 className="text-center fw-bold fst-italic text-warning">Book a Table</h3>

        <h1 className="text-center">Make a Reservation</h1>

        <p className=" text-center text-warning">
          Reserve your table for a memorable dining experience.
          <br />
          We recommend booking 24 hours in advance for weekend evenings.
        </p>

        <div className="container">

          <div className="reservation-form">

            <div className="row g-4">

              {/* Full Name */}
              <div className="col-md-6">
                <label>Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+1 (800) 000-0000"
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label>Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@email.com"
                />
              </div>

              {/* Guests */}
              <div className="col-md-6">
                <label>Number of Guests *</label>

                <select className="form-select">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                  <option>7 People</option>
                  <option>8 People</option>
                </select>
              </div>

              {/* Date */}
              <div className="col-md-6">
                <label>Date *</label>

                <input
                  type="date"
                  className="form-control"
                />
              </div>

              {/* Time */}
              <div className="col-md-6">
                <label>Time *</label>

                <select className="form-select">
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>01:00 PM</option>
                  <option>02:00 PM</option>
                  <option>07:00 PM</option>
                  <option>08:00 PM</option>
                  <option>09:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="col-12">
                <label>Special Requests</label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Allergies, dietary needs, special occasions..."
                ></textarea>
              </div>

              {/* Button */}
              <div className="col-12">

                <button className="view-menu-btn">
                  📅 & ; Confirm Reservation
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="subscribe">
        <div className="container">
          <h4> Stay Connected</h4>
          <h1>Subscribe & Get Exclusive Deals</h1>
          <p> Get 15% off your first order plus early access to new menu items </p>
          <div className="subscribe-email">
            <input
              type="email"
              className="email"
              placeholder="you@email.com"
            />
            <button className="subscribe-btn"> subscribe </button>
            <p>No spam, unsubscribe anytime.</p>
          </div>
        </div>

      </div>
      <div className="contectus " id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <h4  className=" text-center fw-bold">Get In Touch </h4>
              <h1 className="text-center"> contect us </h1>
              <p className="text-light">Have a question, feedback, or want to plan a special event? We'd love to hear from you.</p>
              <div className="row g-4">

                {/* Full Name */}
                <div className="col-md-6">
                  <label className="fw-bold">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label className="fw-bold">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+1 (800) 000-0000"
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="fw-bold">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@email.com"
                  />
                  {/* Special Requests */}
                  <div className="col-12">
                    <label className="fw-bold">Special Requests</label>

                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder=" write your message here..."
                    ></textarea>
                  </div>

                  {/* Button */}
                  <div className="col-12">

                    <button className="reservation-btn p-3 mb-2 mt-3 bg-danger text-white fw-bold">
                      send message
                    </button>

                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-5  find-us-section">
              <h1 className="text-center"> find us </h1>
              <div className="contect-info">
                <div className="contect">
                  <span className="contect-icon">📍</span>
                  <span>address</span>
                </div>
                <div className="contact-value">
                  42 Flavor Street, NY
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-title">
                  <span className="contact-icon">📞</span>
                  <span>Phone</span>
                </div>

                <div className="contact-value">
                  +1 (800) 123-4567
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-title">
                  <span className="contact-icon">✉</span>
                  <span>Email</span>
                </div>

                <div className="contact-value">
                  hello@sdwegon.com
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container footerpage" >
        <div className="lastpage">
          <h1 className="text-center fw-bold"> SD WEGON </h1>
          <p className="text-center fw-bold"> We bring the world's finest flavors together in a fast, friendly,
            and affordable experience.
            Every meal crafted with love</p>
          <div className="icons d-flex justify-content-center ">
            <img src={facebook} className=" " alt="" />
            <img src={instagram} className=" " alt="" />
            <img src={twitter} className=" " alt="" />
            <img src={linkedin} className=" " alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;