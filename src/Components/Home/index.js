import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import useAxiosGet from '../hooks/useAxiosGet';
import api from "../Service/api"


const Home = () => {   
 
  return (   
   <>
    <Header/>
    <div className=" back container-fluid" > </div>
    <Footer/>
   </>
  )
}


export default Home;