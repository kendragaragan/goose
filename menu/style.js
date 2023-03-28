* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

header {
  height: 80px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 40px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  position: relative;
}

nav ul li a:before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.3s;
  bottom: -5px;
}

nav ul li a:hover:before {
  width: 100%;
}

.about-firm,
.our-portfolio,
.lets-connect {
  display: none;
  position: absolute;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 4px;
  transition: opacity 0.3s;
  opacity: 0;
  pointer-events: none;
}

.goose-hover:hover .about-firm,
.ventures-hover:hover .our-portfolio,
.contact-hover:hover .lets-connect {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

.goose-hover:hover .about-firm {
  top: 40px;
  left: -50px;
}

.ventures-hover:hover .our-portfolio {
  top: 40px;
  left: -40px;
}

.contact-hover:hover .lets-connect {
  top: 40px;
  left: -45px;
}

.goose-hover:hover,
.ventures-hover:hover,
.contact-hover:hover {
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  padding: 5px;
}

.goose-hover:hover .about-firm:after,
.ventures-hover:hover .our-portfolio:after,
.contact-hover
