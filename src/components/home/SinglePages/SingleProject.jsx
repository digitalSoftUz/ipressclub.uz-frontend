import React, {useState, useEffect} from 'react';
import axios from "axios";
import { baseUrl } from "../../../contants";
import { useParams } from "react-router-dom";

const SingleProject = (props) => {
  var til = props.til
  let params = useParams();
  const [project, setProject] = useState([]);


  useEffect(() => {
    async function GetTeams() {
      try {
        const res = await axios.get(`${baseUrl}/api/project/single/${params.id}/`)
        if(res){
          setProject(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    GetTeams()
  }, [])
  return ( 
    <React.Fragment>
      <div className="container">
      <div className="xpk projects__single">
        <div className="xpk__title">
          <h1>
            {
              til === "uz" ? project.name
              : til === "ru" ? project.name_ru
              : til === "oz" ? project.name_uz
              : project.name_en
            }
          </h1>
          <div></div>
        </div>
        <div className="xpk__text">
          <img src={`${baseUrl + project.img1}`} alt="" className='animate__animated animate__zoomIn' />
          <p className='animate__animated animate__fadeInUp'>
            {
              til === "uz" ? project.text
              : til === "ru" ? project.text_ru
              : til === "oz" ? project.text_uz
              : project.text_en
            }
          </p>
        </div>
      </div>
      </div>
      
    </React.Fragment>
   );
}
 
export default SingleProject;