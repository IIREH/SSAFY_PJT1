import styled from 'styled-components'

export const Layout = styled.div`
height: 100%;
width: 100%;

display: gird;
place-items: center;
`

export const Container = styled.div`
display: flex;
background-color: #fffcfc;
flex-direction: column;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
border-radius: 20px;
p{
    margin-top: -10px;
    color: #777;
}

`

export const BoxUpload = styled.div`
display: grid;
background-color: #fffcfc;
margin-top: 20px;
margin-bottom: 20px;
place-items: center;
border: 1px dashed #799CD9;
padding: 36px 48px;
border-radius: 20px;
width: 350px;
p{
    margin-top: -10px;
    color: #777;
}

.image-upload{
    display: flex;
    flex-wrap:wrap;

    >input {
        display: none;
    }
}
`