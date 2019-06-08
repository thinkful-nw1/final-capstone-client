import React from 'react'
import './FlightSearchForm.css'

export default class FlightSearchForm extends React.Component{
    render() {
        return(
          <div class="flight-form-card">
            <form class="flight-searchform">
              <input type="text" name="flight-origin"
                    placeholder="From"/>
              <input type="text" name="flight-destination"
                    placeholder="To"/>
              <input type="text" name="flight-depart"
                    placeholder="Today"/>
              <input type="text" name="flight-return"
                    placeholder="Tomorrow"/>
              <button type="submit">Search</button>
            </form>     
          </div> 
        )
    }
}