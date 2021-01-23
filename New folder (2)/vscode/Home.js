import React, { useEffect } from 'react';
import { Jumbotron,Container,Button} from "reactstrap";

const Home=()=> {
    useEffect(()=>{
        document.title="Home || Learn with computerworld";
    },[]);

return(
     <div>
        <Jumbotron className ="text-center">
        <h1 >Learn with dimpal</h1>
        <p> This is developed by dimpal singh for everyone learning.
            complete course for beginners to advance which is completely free of cost.

        </p>
        <Container>
            <Button color="primary" outline>strat using</Button>
        </Container>
        </Jumbotron>
    </div>
    );
}
export default Home;