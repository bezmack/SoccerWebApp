import React from 'react';
import apiConfig from '.././apiKeys';

class WeatherForecast extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }
  componentDidMount = () => {
      const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=20121&units=imperial&cnt=7&APPID=${apiConfig.apiKey}`
      fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("09:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
  }
      // formatDayCards = () => {
      //   return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
      // }
  render() {
    return (
      <div>
        <h1>This is MY weather</h1>
        {/* {this.formatDayCards()} */}
      </div>
    )
  }
}

export default WeatherForecast;
