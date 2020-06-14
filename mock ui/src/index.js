import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import models from "@cloud-annotations/models";

import styles from "./App.module.css";
import "./styles.css";

import video from './video.mp4'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      heartRate: 65,
      respirationRate: 15,
      bodyTemp: 37,
      ambientTemp: 40,
      sp02: 90
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1700
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    var hr = this.state.heartRate;
    var rr = this.state.respirationRate;
    var sp = this.state.sp02;
    var at = this.state.ambientTemp;
    var bt = this.state.bodyTemp;

    var rand =  Math.floor(Math.random() * 2);
    console.log(rand)

 
    if(rand === 0 || hr === 62 || rr === 12 || sp === 81) {
      hr += 1;
      rr += 1;
      sp += 1
    }
    if(rand === 1 || hr === 90 || rr === 19 || sp === 95) {
      hr -= 1;
      rr -= 1;
      sp -= 1;
    }

    if (bt === 39) {
      bt -= 2;
    }

    if (at === 55) {
      at -= 2;
    }

    this.setState({
      heartRate: hr,
      respirationRate: rr,
      bodyTemp: bt + 1,
      ambientTemp: at + 1,
      sp02: sp

    });
  }

  render() {
    return (
      <div >
        <div className={styles.overlay}>
        <div className={styles.overlaybox1}>
          <div className={styles.vitals}>Heart Rate: <b>{this.state.heartRate}</b></div>
          <div className={styles.vitals}>Body Temp: <b>{this.state.bodyTemp}</b></div>
        </div>
        <div className={styles.overlaybox2}>
          <div className={styles.vitals}>Respiration Rate: <b>{this.state.respirationRate}</b></div>
          <div className={styles.vitals}>SP02: <b>{this.state.sp02}%</b></div>
          <div className={styles.vitals}>Ambient Temp: <b>{this.state.ambientTemp}</b></div>
        </div>
      </div>
      <video className={styles.bgvideo} autoPlay loop muted>
      <source src={video} />
      
  </video>
      
  </div>
  
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
