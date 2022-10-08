import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../contants";
import {
  Box,
  Container,
  Image,
  Lavozim,
  MainWrapper,
  Name,
  PeopleContainer,
} from "../../components/home/Kengash/style";

const Kengash = (props) => {
  var til = props.til 
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    async function GetTeams() {
      try {
        const res = await axios.get(`${baseUrl}/api/team/`);
        if (res) {
          setTeamData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    GetTeams();
  }, []);
  return (
    <React.Fragment>
      <Container>

      <MainWrapper>
        <PeopleContainer>
          {teamData?.map((item, index) => (
            <Box key={index}>
              <Image src={`${baseUrl + item.img}`} />
              <Name>
                {
                  til === "uz" ? item.fullname
                  : til === "ru" ? item.fullname_ru
                  : til === "oz" ? item.fullname_uz
                  : item.fullname_en
                }
              </Name>
              <Lavozim>
                {
                  til === "uz" ? item.position
                  : til === "ru" ? item.position_ru
                  : til === "oz" ? item.position_uz
                  : item.position_en
                }
              </Lavozim>
            </Box>
          ))}
        </PeopleContainer>
      </MainWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Kengash;
