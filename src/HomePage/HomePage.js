import React from 'react';
import './HomePage.css';

//#AD974F nav color
class HomePage extends React.Component{
    render(){
        return(
            <section className='HomePage'>
                <h1 className='homeTitle'>Java Rank</h1>
                <div className='div1'></div>
                <div className='div2'></div>
                <p className='description'>Coffee lovers can rejoice. Users can use this application to rate their favorite <br/>
                 local coffee drinks at specific coffee shops. Check out the local popular drinks</p>
            </section>
        )
    }
}

export default HomePage;