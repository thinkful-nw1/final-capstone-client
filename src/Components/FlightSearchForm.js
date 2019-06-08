import React from 'react'

export default class FlightSearchForm extends React.Component{
    render() {
        return(
            <div class="card-flight-form-card">
            <form class="flight-searchform">
              <ul class="flight-searchform-airports">
                <li>
                    <input type="text" name="flight-origin"
                    placeholder="Bos"/>
                </li>
                <li class="flight-form-swapper">
                  <img src='/' alt="swap-arrows"/>
                </li>
                <li>
                    <input type="text" name="flight-destination"
                    placeholder="To"/>
                </li>
              </ul>
               <ul class="flight-searchform-dates">
                <li>
                    <input type="text" name="flight-depart"
                    placeholder="Today"/>
                </li>
                <li>
                    <input type="text" name="flight-return"
                    placeholder="Tomorrow"/>
                </li>
              </ul>
            </form>
          </div> 
        )
    }
}