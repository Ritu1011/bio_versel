import React from 'react'
import Navbar from './Navbar'
import "./mainStyle.css"
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Bio = () => {
  const [location, setlocation] = useState(!false);
  const [school, setSchool] = useState(!false);
  const [occupation, setOccupation] = useState(!false);
  const [religion, setReligion] = useState(!false);
  const [desire, setDesire] = useState(!false);
  const params = useParams();
  const [data, setData] = useState({
    nameId: "",
    genderId: "male",
    locationId: "",
    schoolId: "",
    majorId: "",
    occupationId: "",
    religionId: "",
    desireId: "",
  })


const RandomData = (e) => {
  e.preventDefault()
  console.log(e)
const {name}=e.target;

var num=Math.floor(Math.random() * 10);

if(name==="name"){
axios.get(`https://bio-backend-main.herokuapp.com/name/?id=${num}`)
  .then((res)=>{
    setData({...data,
      name:res.data[0].name,
      gender: res.data[0].gender,
    })
  }).catch((err)=>{
    console.log(err)
  })
}
  }
  
  
  
  const handleInputData = (e) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }
  console.log(data)


  const handleCheckbox = (e) => {
    const { id } = e.target;
    const checkedData = e.target.checked;
    if (checkedData) {
      if (id === "location") {
        setlocation(false);
      } else if (id === "school") {
        setSchool(false);
      } else if (id === "occupation") {
        setOccupation(false);
      }
      else if (id === "religion") {
        setReligion(false);
      } else if (id === "desire") {
        setDesire(false);
      }
    }
    else if (!checkedData) {
      if (id === "location") {
        setlocation(true);
      } else if (id === "school") {
        setSchool(true);
      } else if (id === "occupation") {
        setOccupation(true);
      }
      else if (id === "religion") {
        setReligion(true);
      } else if (id === "desire") {
        setDesire(true);
      }
    }
  }


  return (
    <>
      <Navbar></Navbar>
      <div className='Main_container'>
        <div className="settings"><h2>Options</h2>

          <form>
            <div className="bio-element">
              <label>Name </label>
              <input type="text"
                id='nameId'
                onInput={handleInputData}
                value={data.nameId}
              />
              <label>Gender</label>
              <select id='genderId'
                onChange={handleInputData}>
                {data.genderId === 'male'} ?
                <option value="male">Male</option> :
                <option value="female">Female</option>
              </select>
              <button name="name"
                onClick={RandomData}
              >Random Name</button>
            </div>
            {/* //////////////////////// */}
            <div className="bio-element">
              <label >
                <input type="checkbox"
                  id="location"
                  onChange={handleCheckbox} />
                Location</label>
              <input type="text"
                id='locationId'
                value={data.locationId}
                disabled={location}
                onChange={handleInputData} />

              <button className='random'
                name="location"
                disabled={location}>
                Random Location</button>
            </div>
            {/* //////////////////////////// */}
            <div className="bio-element">
              <label>
                <input type="checkbox"
                  id="school"
                  onChange={handleCheckbox}
                />School</label>
              <input type="text"
                id='schoolId'
                value={data.schoolId}
                onChange={handleInputData}
                disabled={school}
              />
              <button
                className="random"
                disabled={school}
                onClick={RandomData}
              >Random School</button>
              <br />
              {/* ///////////////////////////////////// */}
              <label>Major</label>
              <input type="text"
                disabled={school}
                id="majorId"
                value={data.majorId}
                onChange={handleInputData}
              />
              <button
                disabled={school}
                name="major"
                onClick={RandomData}
              >Random Major</button>
            </div>

            {/* -----------occupation---------- */}
            <div className="bio-element">
              <label >
                <input type="checkbox"
                  id="occupation"
                  onChange={handleCheckbox} />
                Occupation
              </label>
              <input type="text"
                id='occupationId'
                value={data.occupationId}
                onInput={handleInputData}
                disabled={occupation}
              />
              <button
                disabled={occupation}
                onClick={RandomData}
                name="ccupation"
              >Random Occupation</button>
            </div>
            {/* ----------religion-------------- */}
            <div className="bio-element">
              <label >
                <br />
                <input type="checkbox"
                  id="religion"
                  cols="70" rows="7"
                  onChange={handleCheckbox}
                />Religious Background</label>
              <textarea type="text"

                id='religionId'
                disabled={religion}
                onInput={handleInputData}
                value={data.religionId}
              >

              </textarea>
              <button disabled={religion}
                name="religion"
                onClick={RandomData}
              >Random Religion</button>
            </div>
            {/* -----------------desire----------------- */}
            <div className="bio-element">
              <label >
                <input type="checkbox"
                  id="desire"
                  onChange={handleCheckbox}
                />Reason for meeting with missionaries</label>  <br />
              <textarea type="text"
                id='desireId'
                disabled={desire}
                value={data.desireId}
                onInput={handleInputData}
              >
              </textarea>
              <button className="restoration"  disabled={desire}>Restoration</button>
              <button className="plan-of-salvation"  disabled={desire}>Plan of Salvation</button>
              <button className="gospel-of-christ"  disabled={desire}>Gospel of Christ</button>
              <button className="law-of-chastity"  disabled={desire}>Law of Chastity</button>
              <button className="word-of-wisdom"  disabled={desire}>Word of Wisdom</button>
              <button  disabled={desire}>Any Lesson</button></div></form>
        </div>

        {/* //////////////////////////////////// */}
        <div className="results"><h2>Result</h2>
          <div className="bio-output">
            {data.nameId} is from {data.locationId}.
            {data.genderId === "female" ? "She" : "He"} is studying {data.majorId} at
            {data.schoolId} . {data.genderId === "female" ? "She" : "He"} currently
            works as a {data.occupationId}.
            {data.genderId === "female" ? "She" : "He"} said {data.religionId}
            .{data.genderId === "female" ? "She" : "He"} {data.desireId}.

          </div>
        </div>

      </div>
    </>
  )
}

export default Bio