import React from 'react';
import { LineChart as LChart, Line,XAxis,YAxis,Tooltip } from 'recharts';

const  LiChart = () => {

const mathMarksData = [
    {"id": 1, "name": "John Doe", "student": "Student 1", "mathMarks": 85},
    {"id": 2, "name": "Jane Smith", "student": "Student 2", "mathMarks": 78},
    {"id": 3, "name": "Bob Johnson", "student": "Student 3", "mathMarks": 92},
    {"id": 4, "name": "Alice Brown", "student": "Student 4", "mathMarks": 88},
    {"id": 5, "name": "Chris Davis", "student": "Student 5", "mathMarks": 75},
    {"id": 6, "name": "Emily Wilson", "student": "Student 6", "mathMarks": 94},
    {"id": 7, "name": "Michael Lee", "student": "Student 7", "mathMarks": 82},
    {"id": 8, "name": "Sarah Miller", "student": "Student 8", "mathMarks": 90},
    {"id": 9, "name": "David Clark", "student": "Student 9", "mathMarks": 87},
    {"id": 10, "name": "Olivia White", "student": "Student 10", "mathMarks": 79}
  ]

    return (
        <div>
          <LChart width={800} height={400} data={mathMarksData}>
            <XAxis dataKey='name'></XAxis>
            <Tooltip></Tooltip>
            <Line dataKey="mathMarks"></Line>
          </LChart>

            
        </div>
    );
};

export default LiChart;