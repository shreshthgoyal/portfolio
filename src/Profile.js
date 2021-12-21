/* eslint-disable jsx-a11y/anchor-has-content */
import './Profile.css'

const Profile = () => {
    return(
        <div className="container">
  <div className="card">
    
    <div className="front side svg-wrapper">
      <h1 className="logo">Shreshth Goyal</h1>
    </div>

    
    <div className="back side">
      <h3 className="name">Shreshth Goyal</h3>
      <div>Student</div>      
      <div className="info">
      <a href={`mailto:shreshthg30@gmail.com`}><p><span className="property">Email: </span>shreshthg30@gmail.com <i class="far fa-envelope"></i></p></a>
      <a href={`https://github.com/shreshthgoyal`} target="_blank" rel="noopener noreferrer"> <p><span className="property">Github: </span>@shreshthgoyal <i class="fab fa-github"></i>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</p></a>
      <a href={`https://www.linkedin.com/in/shreshthg30/`} target="_blank" rel="noopener noreferrer">  <p><span className="property">Linkedin: </span>shreshthg30 <i class="fab fa-linkedin"></i>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</p></a>
      <a href={`https://www.instagram.com/i_shreshth/`} target="_blank" rel="noopener noreferrer">   <p><span className="property">Instagram: </span>i_shreshth <i class="fab fa-instagram"></i>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</p></a>
      <a href={`https://dev.to/shreshthgoyal`} target="_blank" rel="noopener noreferrer">  <p><span className="property">dev.to: </span>shreshthgoyal <i class="fab fa-dev"></i>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</p></a>
      </div>
    </div>
    
  </div>
</div>
    )
}

export default Profile;