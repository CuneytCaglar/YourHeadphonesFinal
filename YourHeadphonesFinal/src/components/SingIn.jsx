

export default function SingIn(props) {
  return (
    <div className="container-fluid home-container ">
      <div className="row">
        <div className="cardStyle col-sm-5 justify-content-center d-flex flex-column  mb-5 ps-5">
          <div>
          <div className="card bg-transparent">
         <div className="card-body">
        
            <form>
            <div className="mb-3">
    <label  className="form-label">Name-Surname</label>
    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className= "form-text">Well never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="whitetext form-check-label" htmlFor=" exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
         
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}
