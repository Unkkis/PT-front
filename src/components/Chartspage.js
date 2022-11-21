import React from "react";
import {  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from "recharts";
import _ from "lodash";



export default function Chartspage() {

  const [trainings, setTrainings] = React.useState([]);

  //using other API link than in Traininglist page. No need for customer names here
  React.useEffect( () => {
      fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(data => setTrainings(data.content))
      .catch(err => console.error(err));
  }, []);
    
  //get only durations + training names and grouping them
  var durations = trainings.map((training) => (
      {
          name: training.activity,
          duration: training.duration
      }
  ));
  durations = _.groupBy(durations, 'name');

  //sum durations and add them to 'data' array
  const data = []

  for (let key in durations){
    const sum = _.sumBy(durations[key], 'duration')
    data.push({ name: key, duration: sum})
  } 

  return (
    <BarChart
        width={800}
        height={400}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        
    >
      
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'Duration (min)', angle: -90, position: 'insideLeft' }} padding={{ top: 20 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="duration" fill="#8884d8" >
        <LabelList dataKey="duration" position="top" />
      </Bar>
    </BarChart>
  );
}
