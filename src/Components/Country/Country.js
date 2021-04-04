    import React from 'react';

    const Country = (props) => {
        
    const {name , population,flag}=props.count // props : use to access data from API and Show UI: 



    const flagstyle = {height:'50px'}
    const countrystyle ={border:'1px solid red', margin:'10px', padding:'10px'}

    const handle = props.handle; // handle use from drieerent file from : " props" ;



        return ( 
            <div style={countrystyle}>


                <h1>This is Country: {name}</h1>


                <img style ={flagstyle} src={flag} alt=""/>


                <p> Country Population : {population}</p>

                
                <button onClick={()=>handle(props.count)}>Add-Country</button>
            </div>
        );
    };

    export default Country;