import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function CreateUser(props) {
    return (
        <div className='App'>

            <h1>Create User:</h1><br/>

            <div className="form-group">
                <label>Name : </label>
                <input className='form-control' type="text" name="name" value={ props.nameProp } onChange={ props.changeHandlerNameProp }/><br/>
            </div>

            <div className="form-group">
                <label>Age : </label>
                <input min={1} className='form-control' type="number" name="age" value={ props.ageProp } onChange={ props.changeHandlerAgeProp }/><br/>
            </div>

            <div className="form-group">
                <label>Favorite Movies : </label>
                <input placeholder='Please use format: Movie,Movie,...' className='form-control' type="text" name="favoriteMovie" value={ props.favoriteMovieProp } onChange={ props.changeHandlerMovieProp }/><br/>
            </div>

            <button className='btn btn-primary' onClick={ props.clickHandlerCreateProp }>Create User</button><br/><br/>

            <h3 style={{color: "red"}}>{ props.messageCreateProp }</h3>
        
        </div>
    )
}

export default CreateUser