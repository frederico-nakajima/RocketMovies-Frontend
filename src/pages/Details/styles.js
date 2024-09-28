import styled from 'styled-components';



export const Container = styled.div`
   
    width: 100%;
    height: 100vh;

   display: grid;
   grid-template-rows: 105px 100px auto;
   grid-template-areas: 
   
   "header"
   "headerlink"
   "content";


    >main{
        grid-area: content;
        overflow-y: auto;

        ::-webkit-scrollbar{
            width: 6px;
            

        }
        ::-webkit-scrollbar-thumb{
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 6px;
        }
            
    }
  
`;

export const HeaderLink = styled.div`
    
     display: flex;
     width:  1160px;
     justify-content: flex-start;
     align-items: center;
     margin: 0 auto;

     >button{
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        background:none;
        border:none;
        font-size: 16px;


        svg{
        font-size: 16px;
        }
     }

`;





export const Content = styled.div`
    
    margin: 0 auto;
    max-width: 1160px;
    display: flex;
    flex-direction: column;
    height: 581px;
    overflow-y: scroll;
    padding-right: 24px;
    position:relative;

    .stars{
        display: flex;
        align-items: center;
       
        >h1{
            font-size: 36px;
            font-weight: 500;
            margin-right:20px;
        }
    }
        
        
      
     
    .auth{
        display: flex;
        flex-direction: row;
        gap:8px ;
        margin-top:24px ;
        align-items: center;

        >span{
            padding-right:8px;
        }
        >img{
            border-radius: 50%;
            width: 16px;
            height: 16px;       
        }
        p{
            font-size: 16px;
            
            text-align: justify;
        }
    }

    .description{
        text-align: justify;
        font-family: "Roboto Slab";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
   
`;

export const Tags = styled.div`
    display: flex;
    margin: 40px 0;

`;




   
  

