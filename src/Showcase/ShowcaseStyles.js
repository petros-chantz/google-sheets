import styled from "styled-components";
//  color: #2F3E46;

export const ShowcaseWrapper = styled.div`
    height: 70%;
    width: 50%;
    background-color: #cad2c5;
    border-radius: 4px;
    box-shadow: rgb(47 62 70 / 50%) 0px 10px 30px -5px;
    padding: 20px;
    display:grid;
    grid-template-rows: 40px 1fr;

    .title-box{
        display: grid;
        place-items: center start;

        .title{
            color: #2F3E46;
        }
    }

    .content-box{
         display: grid;
         grid-template-rows: repeat(6, 1fr);
         grid-template-columns: repeat(4, 1fr);
         place-items: center;
         grid-gap:10px;

         .list-item{
             background-color: #A0AF97;
             border: 1px solid #2F3E46;
             border-radius: 3px;
             height: 50%;
             width: 100%;
             display: grid;
             place-items: center;
         }

         .list-item-row1{
             font-size: 15px;
             color: #2F3E46;
         }
    }
`;

