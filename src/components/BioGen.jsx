import React from 'react'
import Navbar from './Navbar'
import "./mainStyle.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Bio = () => {
  const [city, setCity] = useState(!false);
  const [school, setSchool] = useState(!false);
  const [occupation, setOccupation] = useState(!false);
  const [religion, setReligion] = useState(!false);
  const [desire, setDesire] = useState(!false);
  const [image, setImage] = useState(!false);
  const [pic, setPic] = useState(true)
  const params = useParams();
  const [file, setFile] = useState()
  const [data, setData] = useState({
    name: "",
    gender: "male",
    city: "",
    school: "",
    major: "",
    occupation: "",
    religion: "",
    desire: "",
  })


const RandomData = (e) => {
  e.preventDefault()
  const {name} = e.target;
  console.log(name)

  var num = Math.floor(Math.random() * 10);
  if (name === "city") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/location/${num}`)
      .then((res) => {
        setData(res.data);
      });
  } 
 else  if (name === "name") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/name/${num}`)
      .then((res) => {
        setData(res.data);
      });
  }
  else  if (name === "school") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/school/${num}`)
      .then((res) => {
        setData(res.data);
      });
  }  
  else  if (name === "major") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/major/${num}`)
      .then((res) => {
        setData(res.data);
      });
  } 
  else  if (name ==="occupation") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/occupation/${num}`)
      .then((res) => {
        setData(res.data);
      });
  } 
  
  else  if (name ==="religion") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/religion/${num}`)
      .then((res) => {
        setData(res.data);
      });
  } 
  else  if (name ==="desire") {
    axios
      .get(`https://bio-backend-main.herokuapp.com/reason/${num}`)
      .then((res) => {
        setData(res.data);
      });
  } 
  }
  // console.log(data)
  
  
  
  const handleInputData = (e) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }
  // console.log(data)


  const handleCheckbox = (e) => {
    const { id } = e.target;
    const checkedData = e.target.checked;
    if (checkedData) {
      if (id === "cityId") {
        setCity(false);
      } else if (id === "schoolId") {
        setSchool(false);
      } else if (id === "occupationId") {
        setOccupation(false);
      }
      else if (id === "religionId") {
        setReligion(false);
      } else if (id === "desireId") {
        setDesire(false);
      }
    }
    else if (!checkedData) {
      if (id === "cityId") {
        setCity(true);
      } else if (id === "schoolId") {
        setSchool(true);
      } else if (id === "occupationId") {
        setOccupation(true);
      }
      else if (id === "religionId") {
        setReligion(true);
      } else if (id === "desireId") {
        setDesire(true);
      }
    }
  }

 
  //////////////////////////////////////
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const translate = () => {
  
   const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      // console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        // console.log(res.data);
        setOptions(res.data);
      });
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <div className='Main_container'>
        <div className="settings"><h2>Options</h2>

          {/* <form method='post'> */}
            <div className="bio-element">
              <label>Name </label>
              <input type="text"
                id='name'
                onInput={handleInputData}
                value={data.name}
              />
              <label>Gender</label>
              <select id='gender'
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
                  id="cityId"
                  onChange={handleCheckbox} />
                Location</label>
              <input type="text"
                id='city'
                value={data.city}
                disabled={city}
                onChange={handleInputData} />

              <button className='random'
                name="city"
                disabled={city}
                onClick={RandomData}>
                Random city</button>
            </div>
            {/* //////////////////////////// */}
            <div className="bio-element">
              <label>
                <input type="checkbox"
                  id="schoolId"
                  onChange={handleCheckbox}
                />School</label>
              <input type="text"
                id='school'
                value={data.school}
                onChange={handleInputData}
                disabled={school}
              />
              <button
                className="random"
                disabled={school}
                name="school"
                onClick={RandomData}
              >Random School</button>
              <br />
              {/* ///////////////////////////////////// */}
              <label>Major</label>
              <input type="text"
                disabled={school}
                id="major"
                value={data.major}
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
                  id="occupationId"
                  onChange={handleCheckbox} />
                Occupation
              </label>
              <input type="text"
                id='occupation'
                value={data.occupation}
                onInput={handleInputData}
                disabled={occupation}
              />
              <button
                disabled={occupation}
                onClick={RandomData}
                name="occupation"
              >Random Occupation</button>
            </div>
            {/* ----------religion-------------- */}
            <div className="bio-element">
              <label >
                <br />
                <input type="checkbox"
                  id="religionId"
                  cols="70" rows="7"
                  onChange={handleCheckbox}
                />Religious Background</label>
              <textarea type="text"

                id='religion'
                disabled={religion}
                onInput={handleInputData}
                value={data.religion}
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
                  id="desireId"
                  onChange={handleCheckbox}
                />Reason for meeting with missionaries</label>  <br />
              <textarea type="text"
                id='desire'
                disabled={desire}
                value={data.reason}
                onInput={handleInputData}
              >
              </textarea>
              <button className="restoration"   
              name="desire"
              onClick={RandomData}
               disabled={desire}>Restoration</button>
              <button className="plan-of-salvation" 
               name="desire"
               onClick={RandomData}  disabled={desire}>Plan of Salvation</button>
              <button className="gospel-of-christ"
               name="desire"
               onClick={RandomData}
                disabled={desire}>Gospel of Christ</button>
              <button className="law-of-chastity" 
               name="desire"
               onClick={RandomData} disabled={desire}>Law of Chastity</button>
              <button className="word-of-wisdom" 
               name="desire"
               onClick={RandomData} disabled={desire}>Word of Wisdom</button>
              <button  disabled={desire}
               name="desire"
               onClick={RandomData}>Any Lesson</button></div>
              {/* </form> */}
              {/* //////////image///////////// */}
           
             
        </div>

        {/* //////////////////////////////////// */}
        <div className="results">
          <h2>Result</h2>

        {/* ////////////////////////// */}
          <div className="bio-output">
            {data.name} is from {data.city}.
            {data.gender === "female" ? "She" : "He"} is studying {data.major} at
            {data.school} . {data.gender === "female" ? "She" : "He"} currently
            works as a {data.occupation}.
            {data.gender === "female" ? "She" : "He"} said {data.religion}
            .{data.gender === "female" ? "She" : "He"} {data.desire}.

          </div>
{/* //////////////////////////////////////// */}
<div> <h2>  Copy and Paste text here </h2></div>

<div style={{backgroundColor: "#00acc1",marginLeft:"20px",marginTop:"20px"}}>
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}) :
        <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      
    
      <div  style={{marginLeft:"20px",marginRight:"20px",width:"90%"}}>
        
        <textarea   cols="30" rows="10"
         onInput={(e) => setInput(e.target.value)}>

         </textarea>
      </div>
      <div style={{marginLeft:"20px",marginRight:"20px",width:"90%"}}>
      
        <textarea  cols="30" rows="10" value={output}></textarea>
      </div>
      <div>
        <button onClick={e=>translate()}>Translate</button>
      </div>
      </div>
    </div>

        </div>

      
    </>
  )
}

export default Bio