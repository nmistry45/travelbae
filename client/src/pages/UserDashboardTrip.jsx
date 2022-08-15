/**
 * Author: Smriti Mishra
 * Feature: UserDashboard Trip Page
 */
import React from "react";
import "./../components/UserDashboard/Dashboard.css";
import img1 from "./../assets/lahore.jpg";
import img2 from "./../assets/boston.jpg";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";

/**
 * This Page is responsible for displaying the user dashboard Trip Page.
 * @param {*} props 
 * @returns 
 */

function UserDashbordTrip() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <div className="main-container">
          <SideBar />
          <div className="dashbord-container">
            <div className="dashbord-subcontainer">
              <h3 className="dashbord-titletext">Upcoming Trips</h3>
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  {/* CLOSED TRIP INFORMATION */}
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <img
                        src={img1}
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Lahore, Pakistan</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu.
                        </h5>
                      </div>
                    </div>

                    {/* <li style={{ listStyle: "none", textAlign: "end" }}>
                      <h5 className="all">
                        <a href="#">LOAD MORE</a>
                      </h5>
                    </li> */}
                  </div>
                </div>
              </div>
              <h3 className="dashbord-titletext">Completed Trips</h3>
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  {/* UPCOMING TRIP INFORMATION */}
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <img
                        src={img2}
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Boston, USA</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu.
                        </h5>
                      </div>
                    </div>
                    {/* <li style={{ listStyle: "none", textAlign: "end" }}>
                      <h5 className="all">
                        <a href="#">LOAD MORE</a>
                      </h5>
                    </li> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordTrip;
