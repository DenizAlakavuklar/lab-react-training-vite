

function IdCard ({firstName,lastName,gender,height,birth,picture}) {
      return (
      <div className="IdCard box">
        <img src={picture} alt=""/>
        <div className="right">
          <strong>First name</strong>: {firstName} <br/>
          <strong>Last name</strong>: {lastName} <br/>
          <strong>Gender</strong>: {gender} <br/>
          <strong>Height</strong>: {height / 100}m <br/>
          <strong>Birth</strong>: {birth.toDateString()} <br/>
        </div>
      </div>
    );
  }


export default IdCard;
