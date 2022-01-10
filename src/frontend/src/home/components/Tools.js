import { Container} from "react-bootstrap";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import reactjs from '../assets/reactjs.png';
import springboot from '../assets/springBoot.png';
import postman from '../assets/postman.png';
import docker from '../assets/docker.png';
import laravel from '../assets/laravel.png';
import javascript from '../assets/javascript.png';
import css3 from '../assets/css3.png';
import html5 from '../assets/html5.png';
import php from '../assets/php.jpg';

const Tools = () => {

    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:550, itemsToShow:2},
        {width:768, itemsToShow:8},
        {width:1200, itemsToShow:8},
    ];



    return (
        <Container>
            <Content>
                <div className="title">
                    <h2>Other Tools</h2>
                </div>
                <Carousel
                    breakPoints={breakPoints}
                    showArrows={false}
                    focusOnSelect={true}
                    pagination={false}
                    className="tools"
                    isRTL
                    enableAutoPlay={true}
                    autoPlaySpeed={100}
                >
                    <div className="tool">
                        <img src={docker} alt="Docker" title="Docker"/>
                    </div>
                    <div className="tool">
                        <img src={postman} alt="Postman" title="Postman"/>
                    </div>
                    <div className="tool">
                        <img src={reactjs} alt="reactjs" title="React js"/>
                    </div>
                    <div className="tool">
                        <img src={springboot} alt="Spring boot" title="Spring boot"/>
                    </div>
                    <div className="tool">
                        <img src={laravel} alt="Laravel" title="Laravel"/>
                    </div>
                    <div className="tool">
                        <img src={javascript} alt="javascript" title="javascript"/>
                    </div>
                    <div className="tool">
                        <img src={css3} alt="CSS 3" title="CSS 3"/>
                    </div>
                    <div className="tool">
                        <img src={html5} alt="HTML 5" title="HTML 5"/>
                    </div>
                    <div className="tool">
                        <img src={php} alt="PHP" title="PHP"/>
                    </div>
                </Carousel>
            </Content>
        </Container>
    );
};


const Content = styled.div`
  padding: 2rem 1rem;
  border-radius: 6px;
  background: ${props => props.theme.bgColor};
  box-shadow: 5px 5px 20px #13192f, -5px -5px 20px #161c34;

  .title{
    padding-bottom:1rem ;
    color: ${props => props.theme.primaryColor};
    opacity: .5;
  }
  
  .tools {
    
    .rec-item-wrapper{
      width: 54px;
    }
    
    .tool {
      width: 50px;
      height: 50px;
      overflow: hidden;


      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

`;



export default Tools;