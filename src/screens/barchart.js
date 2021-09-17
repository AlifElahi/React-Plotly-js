import React,{useState,useEffect} from 'react'
import Plot from 'react-plotly.js';
import { getBarChartData } from '../service/service';

export default function Barchart() {
    const [data,setData]=useState([])
    async function callfordata(){
        let response = await getBarChartData();
        setData(response)
    }
    useEffect(() => {
        callfordata()
    }, [])

    return (
        <div style={{ backgroundColor: "rebeccapurple", display: 'flex', height: "100vh", width: '100%',justifyContent:'center',alignItems:'center' }}>
            <Plot
                data={data.length?data:[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
            // layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        </div>
    )
}
