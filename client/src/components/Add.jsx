import React , { useState } from 'react';
import './css/add.css';
import { Button, TextField } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Navatar from './Navatar';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const Add = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });


    const {register,handleSubmit} = useForm();
    const submitApplication= (data) => {
      console.log(data);
      axios.post('https://bloodbankserver.onrender.com/user/addperson',data).then((res) => {
        console.log(res);
        alert(data.name + " Successfully Applied");
      }).catch((err) => {
        console.log(err);
        alert("Signup Failed");
      })
    }
  

    
    // Enable number of units of blood dropdown based on the selected value of the category dropdown
    const [firstSelectValue, setFirstSelectValue] = useState('');
    const [secondSelectEnabled, setSecondSelectEnabled] = useState(false);
    const [secondSelectValue, setSecondSelectValue] = useState('');
    const handleFirstSelectChange = (event) => {
      const value = event.target.value;
      setFirstSelectValue(value);
      setSecondSelectEnabled(value !== 'Donor');
    };
    const handleSecondSelectChange = (event) => {
      const value = event.target.value;
      setSecondSelectValue(value);
    };
  
    return (
        <div>
            <Navatar />
            <animated.div style={props}>
                <div className='add-form-main-div center'>
                    <br></br><br></br><br></br><br></br>
                    <form>
                        <div className='login-text-box-main'>
                            <TextField className='login-text-box' type='text' name="name" id="name" {...register('name')} label="Full Name" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
                            <select name="age" id="age" {...register('age')} className='age-group-select' required>
                                <option value="" disabled selected hidden required>Age</option>
                                <option value="1" class="age-group-option">1</option>
                                <option value="2" class="age-group-option">2</option>
                                <option value="3" class="age-group-option">3</option>
                                <option value="4" class="age-group-option">4</option>
                                <option value="5" class="age-group-option">5</option>
                                <option value="6" class="age-group-option">6</option>
                                <option value="7" class="age-group-option">7</option>
                                <option value="8" class="age-group-option">8</option>
                                <option value="9" class="age-group-option">9</option>
                                <option value="10" class="age-group-option">10</option>
                                <option value="11" class="age-group-option">11</option>
                                <option value="12" class="age-group-option">12</option>
                                <option value="13" class="age-group-option">13</option>
                                <option value="14" class="age-group-option">14</option>
                                <option value="15" class="age-group-option">15</option>
                                <option value="16" class="age-group-option">16</option>
                                <option value="17" class="age-group-option">17</option>
                                <option value="18" class="age-group-option">18</option>
                                <option value="19" class="age-group-option">19</option>
                                <option value="20" class="age-group-option">20</option>
                                <option value="21" class="age-group-option">21</option>
                                <option value="22" class="age-group-option">22</option>
                                <option value="23" class="age-group-option">23</option>
                                <option value="24" class="age-group-option">24</option>
                                <option value="25" class="age-group-option">25</option>
                                <option value="26" class="age-group-option">26</option>
                                <option value="27" class="age-group-option">27</option>
                                <option value="28" class="age-group-option">28</option>
                                <option value="29" class="age-group-option">29</option>
                                <option value="30" class="age-group-option">30</option>
                                <option value="31" class="age-group-option">31</option>
                                <option value="32" class="age-group-option">32</option>
                                <option value="33" class="age-group-option">33</option>
                                <option value="34" class="age-group-option">34</option>
                                <option value="35" class="age-group-option">35</option>
                                <option value="36" class="age-group-option">36</option>
                                <option value="37" class="age-group-option">37</option>
                                <option value="38" class="age-group-option">38</option>
                                <option value="39" class="age-group-option">39</option>
                                <option value="40" class="age-group-option">40</option>
                                <option value="41" class="age-group-option">41</option>
                                <option value="42" class="age-group-option">42</option>
                                <option value="43" class="age-group-option">43</option>
                                <option value="44" class="age-group-option">44</option>
                                <option value="45" class="age-group-option">45</option>
                                <option value="46" class="age-group-option">46</option>
                                <option value="47" class="age-group-option">47</option>
                                <option value="48" class="age-group-option">48</option>
                                <option value="49" class="age-group-option">49</option>
                                <option value="50" class="age-group-option">50</option>
                                <option value="51" class="age-group-option">51</option>
                                <option value="52" class="age-group-option">52</option>
                                <option value="53" class="age-group-option">53</option>
                                <option value="54" class="age-group-option">54</option>
                                <option value="55" class="age-group-option">55</option>
                                <option value="56" class="age-group-option">56</option>
                                <option value="57" class="age-group-option">57</option>
                                <option value="58" class="age-group-option">58</option>
                                <option value="59" class="age-group-option">59</option>
                                <option value="60" class="age-group-option">60</option>
                                <option value="61" class="age-group-option">61</option>
                                <option value="62" class="age-group-option">62</option>
                                <option value="63" class="age-group-option">63</option>
                                <option value="64" class="age-group-option">64</option>
                                <option value="65" class="age-group-option">65</option>
                                <option value="66" class="age-group-option">66</option>
                                <option value="67" class="age-group-option">67</option>
                                <option value="68" class="age-group-option">68</option>
                                <option value="69" class="age-group-option">69</option>
                                <option value="70" class="age-group-option">70</option>
                                <option value="71" class="age-group-option">71</option>
                                <option value="72" class="age-group-option">72</option>
                                <option value="73" class="age-group-option">73</option>
                                <option value="74" class="age-group-option">74</option>
                                <option value="75" class="age-group-option">75</option>
                                <option value="76" class="age-group-option">76</option>
                                <option value="77" class="age-group-option">77</option>
                                <option value="78" class="age-group-option">78</option>
                                <option value="79" class="age-group-option">79</option>
                                <option value="80" class="age-group-option">80</option>
                                <option value="81" class="age-group-option">81</option>
                                <option value="82" class="age-group-option">82</option>
                                <option value="83" class="age-group-option">83</option>
                                <option value="84" class="age-group-option">84</option>
                                <option value="85" class="age-group-option">85</option>
                                <option value="86" class="age-group-option">86</option>
                                <option value="87" class="age-group-option">87</option>
                                <option value="88" class="age-group-option">88</option>
                                <option value="89" class="age-group-option">89</option>
                                <option value="90" class="age-group-option">90</option>
                                <option value="91" class="age-group-option">91</option>
                                <option value="92" class="age-group-option">92</option>
                                <option value="93" class="age-group-option">93</option>
                                <option value="94" class="age-group-option">94</option>
                                <option value="95" class="age-group-option">95</option>
                                <option value="96" class="age-group-option">96</option>
                                <option value="97" class="age-group-option">97</option>
                                <option value="98" class="age-group-option">98</option>
                                <option value="99" class="age-group-option">99</option>
                                <option value="100" class="age-group-option">100</option>
                                <option value="101" class="age-group-option">101</option>
                                <option value="102" class="age-group-option">102</option>
                                <option value="103" class="age-group-option">103</option>
                                <option value="104" class="age-group-option">104</option>
                                <option value="105" class="age-group-option">105</option>
                                <option value="106" class="age-group-option">106</option>
                                <option value="107" class="age-group-option">107</option>
                                <option value="108" class="age-group-option">108</option>
                                <option value="109" class="age-group-option">109</option>
                                <option value="110" class="age-group-option">110</option>
                            </select>
                        </div>
                        <div className='login-text-box-main'>
                            <TextField className='login-text-box' type='email' name="email" id="email" {...register('email')} label="E-Mail" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField className='login-text-box' type='number' name="phone" id="phone" {...register('phone')} label="Phone" variant="outlined" required />
                        </div>
                        <div className='login-text-box-main'>
                            <select name="bloodgroup" id="blood-group" {...register('bloodgroup')} className='blood-group-select' required>
                                <option value="" class="blood-group-option" disabled selected hidden>Blood Group</option>
                                <option value="A+" class="blood-group-option">A+</option>
                                <option value="A-" class="blood-group-option">A-</option>
                                <option value="AB+" class="blood-group-option">AB+</option>
                                <option value="AB-" class="blood-group-option">AB-</option>
                                <option value="B+" class="blood-group-option">B+</option>
                                <option value="B-" class="blood-group-option">B-</option>
                                <option value="O+" class="blood-group-option">O+</option>
                                <option value="O-" class="blood-group-option">O-</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;
                            <select name="category" id="category" {...register('category')} className='category-select' required value={firstSelectValue} onChange={handleFirstSelectChange}>
                                <option value="" class="category-option" disabled selected hidden>Category</option>
                                <option value="Donor" class="category-option">Donor</option>
                                <option value="Recipient" class="category-option">Recipient</option>
                            </select>
                        </div>
                        <div className='login-text-box-main'>
                            <select name="unitsofblood" id="unitsofblood-group" {...register('unitsofblood')} className='unitsofblood-select' required value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!secondSelectEnabled}>
                                <option value="" class="unitsofblood-option" disabled selected hidden>Unit(s) of Blood</option>
                                <option value="1" class="unitsofblood-option">1 Unit</option>
                                <option value="2" class="unitsofblood-option">2 Units</option>
                                <option value="3" class="unitsofblood-option">3 Units</option>
                                <option value="4" class="unitsofblood-option">4 Units</option>
                                <option value="5" class="unitsofblood-option">5 Units</option>
                                <option value="6" class="unitsofblood-option">6 Units</option>
                                <option value="7" class="unitsofblood-option">7 Units</option>
                                <option value="8" class="unitsofblood-option">8 Units</option>
                                <option value="9" class="unitsofblood-option">9 Units</option>
                                <option value="10" class="unitsofblood-option">10 Units</option>
                                <option value="10" class="unitsofblood-option">11 Units</option>
                                <option value="10" class="unitsofblood-option">12 Units</option>
                                <option value="10" class="unitsofblood-option">13 Units</option>
                                <option value="10" class="unitsofblood-option">14 Units</option>
                                <option value="10" class="unitsofblood-option">15 Units</option>
                            </select>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField className='login-text-box' type='text' name="ailments" id="ailments" {...register('ailments')} label="Ailments (If Any)" variant="outlined" />
                        </div>

                        <div className='login-text-box-main'>
                            <Button type='submit' className='login-page-button' variant="contained" style={{ fontWeight: "bold" }} onClick={handleSubmit(submitApplication)}>Apply</Button>
                        </div>
                    </form>
                </div>
            </animated.div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}


export default Add
