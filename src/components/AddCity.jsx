
import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/action';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:100,
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const AddCity = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state,setState] = useState({
    id:"",
    country:"",
    city:"",
    population:"",

  });
  const [error , setError] = useState("");

  const {id,country,city,population} = state;

  const handleInputChange = (e)=> {
  let {name,value} = e.target;
  setState({...state,[name]:value})
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     if(!id || !country || !city || !population){
       setError("Please Fill All The Details..");
     }else{
       dispatch(addCity(state));
       navigate("/");
       setError("");
     }

  }

  return (
    <div>
    <Button 
    style={{width:"100px",marginTop:'30px'}}
    color="secondary" 
    variant="contained"
    onClick={()=> navigate("/")}
    >Back
    </Button>

    <h2>Add CITY</h2>
    {error ? <h3 style={{color:"red",fontSize:"15px"}}>{error}</h3> : null}

    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <TextField id="standard-basic" name="id" label="Id" value={id} type="text" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="country" label="Country" value={country} type="text" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="city" label="City" value={city} type="text" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="population" label="Population" value={population} type="number" onChange={handleInputChange} />
    <br/>
    
    <Button 
    style={{width:"100px"}}
    color="primary" 
    variant="contained" 
    type="submit">Submit
    </Button>
  </form>
  </div>
  )
}

export default AddCity