import styled from "styled-components";
import testImg from "../Img/testImg.png";

const Project = () => {
  return (
    <ProjectImg $src={testImg}>
      <Title>프로젝트 이름</Title>
    </ProjectImg>
  );
};

export default Project;

const ProjectContainer = styled.div``;

const ProjectImg = styled.div`
  position: relative;
  width: 20vw;
  height: 300px;
  overflow: hidden;
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  width: 90%;
  height: 70px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border: solid 1px black;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 0.3s ease, transform 0.3s ease-in-out;
  ${ProjectImg}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;