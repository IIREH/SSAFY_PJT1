import styled from 'styled-components'


export const Layout = styled.div`
    height: 100%;
    width: 100%;

    display: gird;
    place-items: center;
`

export const Contatiner = styled.div`
    display: flex;
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
    place-items: center;
    border: 1px dashed #799CD9;
    padding: 36px 48px;

`