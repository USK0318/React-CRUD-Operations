import { useState } from 'react';
import axios from "axios";

function First(){
    const [roll,setroll]=useState(0);
    const [name,setname]=useState('');
    const [fname,setfname]=useState('');
    const [eng,seteng]=useState(0);
    const [math,setmath]=useState(0);
    const [sci,setsci]=useState(0);
    const [hin,sethin]=useState(0);
    const [tel,settel]=useState(0);
    const [city,setcity]=useState('');

    function postdata(event){
        axios.post('http://127.0.0.1:8000/studentpost/',[{
            roll: roll,
            name: name,
            father_name: fname,
            english: eng,
            maths: math,
            science: sci,
            hindi: hin,
            telugu: tel,
            city:city
        }]).then(
            (rep)=>{console.log(rep)
            alert('Data submitted successfully!');}
        ).catch((er)=>{console.log(er)
        alert('Data not submitted!');
    })
}
    return(
        <div>
            
            <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '8px' }}>
                <form onSubmit={postdata}>
                <h2 style={{textAlign:'center'}} >Enter your Details</h2>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Roll No</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setroll(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Name</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Father Name</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setfname(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>English</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{seteng(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Math</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setmath(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Science</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setsci(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Hindi</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{sethin(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>Telugu</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{settel(e.target.value)}}/>
                    </div>
                    <div style={inputContainer}>
                        <label style={labelStyle}>City</label>
                        <input type="text" style={inputStyle} onChange={(e)=>{setcity(e.target.value)}}/>
                    </div>
                    <button type="submit" style={submitButton}>Submit</button>
      
                </form>
            </div>
        </div>
    )
}

export default First;

const inputContainer = {
    marginBottom: '15px'
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px'
};

const submitButton = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};
