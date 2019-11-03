import styled from "styled-components";

export const DetailWrapper = styled.div`
   overflow: hidden;
   width: 960px;
   margin: 0 auto;
   padding-bottom: 100px;
`;

export const DetailLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const Header = styled.div`
   margin: 50px 0 20px 0;
   line-height: 44px;
   font-size: 34px;
   color: #333;
   font-weight: bold;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img{
     width: 100%;
  }
  p{
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const DetailRight = styled.div`
   width: 280px;
   float: right;
`;

export const WriterWrapper = styled.div`
 padding: 30px 0 10px 0;
  width: 278px;
  border-radius: 3px;
  height: 250px;
  line-height: 300px;
  text-align: center;
  img{
    width: 100%;
  }
`;
